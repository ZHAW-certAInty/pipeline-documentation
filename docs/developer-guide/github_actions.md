---
sidebar_position: 2
---
# GitHub Actions

## Prerequesites

To effectively monitor the pipeline's repository, you need an active self-hosted runner on DGX, as detailed [here](development_setup#airflow-worker-setup).

## Implementation

To configure and maintain GitHub Actions, it's essential to work within the pipeline's `.github/workflows` directory. The current configuration appears as follows, with the three most critical lines highlighted:

- `branches: [ "pipeline" ]`: This line specifies the branch that GitHub Actions monitors.
- `runs-on: [ bily-dgx3 ]`: When multiple runners are configured for this repository, this line determines which specific runner will be utilized for the current job.

```yaml
name: CI-certAInty
run-name: ${{ github.job }} is built on DGX and monitored by Airflow

# Controls when the workflow will run
on:
  # Triggers the workflow on push request events but only for the "pipeline" branch
  push:
  // highlight-next-line
    branches: [ "pipeline" ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  setup-airflow:
    # The type of runner that the job will run on
    //highlight-next-line
    runs-on: [ bily-dgx3 ]
    # if you want to run it only on brrt's DGX instance:
    # runs-on: brrt-dgx3

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - name: Check out Repository Code
        id: checkout
        uses: actions/checkout@v3

      - name: Dotenv Action
        if: steps.checkout.outcome == 'success'
        id: dotenv
        uses: falti/dotenv-action@v1.0.4

      - name: Check or launch airflow
        if: steps.dotenv.outcome == 'success'
        id: check-or-launch-airflow
        run: |
          pushd ${{ steps.dotenv.outputs.pipeline_home_host }}
          if [ -z `docker compose ps -q airflow-scheduler` ] || [ -z `docker ps -q --no-trunc | grep $(docker compose ps -q airflow-scheduler)` ]; then
            echo "Airflow is not running. Starting airflow."
            docker compose up -d
          else
            echo "Airflow is running."
          fi
          popd

      - name: Check if Airflow worker Docker container exists
        if: steps.check-or-launch-airflow.outcome == 'success'
        id: check-airflow-worker
        run: |
          container_name=${{ format('{0}-{1}', steps.dotenv.outputs.jobname, 'airflow-worker') }}
          container_id=$(docker ps -aqf "name=$container_name")
      
          if [[ -z "$container_id" ]]; then
            echo "No container with name $container_name was found"
          else
            echo "container_id=$container_id" >> $GITHUB_OUTPUT
            echo "Container $container_name with id $container_id found"
          fi

      - name: Stop Airflow worker Docker container if exists
        if: steps.check-airflow-worker.outputs.container_id != ''
        id: stop-airflow-worker
        run: |
          container_name=${{ format('{0}-{1}', steps.dotenv.outputs.jobname, 'airflow-worker') }}
          container_id=${{ steps.check-airflow-worker.outputs.container_id }}
          echo "Stopping Docker container with name $container_name and id $container_id"
          docker stop "$container_id"

      - name: Check if Airflow worker SLURM job exists
        if: steps.check-airflow-worker.outcome == 'success' || steps.check-airflow-worker.outputs.container_id == ''
        id: check-slurm
        run: |
          job_name=${{ format('{0}-{1}', steps.dotenv.outputs.jobname, 'airflow-worker') }}
          job_id=$(squeue -h -o "%i" -n "$job_name")
      
          if [[ -z "$job_id" ]]; then
            echo "No SLURM job with name $job_name was found"
          else
            echo "job_id=$job_id" >> $GITHUB_OUTPUT
            echo "Job $job_name with id $job_id found"
          fi  

      - name: Cancel Airflow worker SLURM job if exists
        if: steps.check-slurm.outputs.job_id != ''
        id: cancel-slurm
        run: |
          job_name=${{ format('{0}-{1}', steps.dotenv.outputs.jobname, 'airflow-worker') }}
          job_id=${{ steps.check-slurm.outputs.job_id }}
          echo "Canceling SLURM job with name $job_name and id $job_id"
          scancel "$job_id"
      
      - name: Run Airflow worker SLURM job and Docker container
        if: steps.cancel-slurm.outcome == 'success' || steps.check-slurm.outputs.job_id == ''
        id: run-slurm
        run: |
          srun --job-name=${{ format('{0}-{1}', steps.dotenv.outputs.jobname, 'airflow-worker') }} --ntasks=${{ steps.dotenv.outputs.ntasks }} --cpus-per-task=${{ steps.dotenv.outputs.cpus }} --mem=${{ steps.dotenv.outputs.mem }} --gres=gpu:${{ steps.dotenv.outputs.gpu }} bash -c 'nvidia-docker run --shm-size=16g --network ${{ steps.dotenv.outputs.network_docker }} --rm --name ${{ format('{0}-{1}', steps.dotenv.outputs.jobname, 'airflow-worker') }} -e DUMB_INIT_SETSID=0 -v ${{ steps.dotenv.outputs.pipeline_home_host }}/airflow/dags:${{ steps.dotenv.outputs.airflow_home_docker }}/dags -v ${{ steps.dotenv.outputs.pipeline_home_host }}/airflow/logs:${{ steps.dotenv.outputs.airflow_home_docker }}/logs -v ${{ steps.dotenv.outputs.pipeline_home_host }}/datasets:/app/datasets -v /var/run/docker.sock:/var/run/docker.sock -u root ${{ format('{0}/{1}', steps.dotenv.outputs.shorty, 'airflow') }} airflow celery worker -q ${{ format('{0}-{1}', steps.dotenv.outputs.jobname, 'queue') }}' &
          
      - name: Check Slurm Job Status
        if: steps.run-slurm.outcome == 'success'
        id: check-slurm-job-status
        run: |
          retries=5
          delay=10
          count=0
          job_name=${{ format('{0}-{1}', steps.dotenv.outputs.jobname, 'airflow-worker') }}
          while [ $count -lt $retries ]; do
            if squeue -u $USER -n ${{ format('{0}-{1}', steps.dotenv.outputs.jobname, 'airflow-worker') }} > /dev/null; then
              echo "Slurm job $job_name is running"
              # Continue with the next steps or actions
              break
            else
              echo "Slurm job ${{ format('{0}-{1}', steps.dotenv.outputs.jobname, 'airflow-worker') }} is not running"

              if [ $count -eq $((retries-1)) ]; then
                echo "Maximum retries reached. Exiting..."
                # Handle the case when the job is not running after maximum retries
                break
              fi

              echo "Waiting for $delay seconds..."
              sleep $delay
              count=$((count+1))
            fi
          done

      - name: Check Docker Container Status
        if: steps.check-slurm-job-status.outcome == 'success'
        id: check-docker-container-status
        run: |
          retries=5
          delay=10
          count=0
          container_name=${{ format('{0}-{1}', steps.dotenv.outputs.jobname, 'airflow-worker') }}
          while [ $count -lt $retries ]; do
            if docker ps -f "name=$container_name" > /dev/null; then
              echo "Docker container $container_name is running"
              # Continue with the next steps or actions
              break
            else
              echo "Docker container $container_name is not running"

              if [ $count -eq $((retries-1)) ]; then
                echo "Maximum retries reached. Exiting..."
                # Handle the case when the job is not running after maximum retries
                break
              fi

              echo "Waiting for $delay seconds..."
              sleep $delay
              count=$((count+1))
            fi
          done

  docker-build:
  //highlight-next-line
    runs-on: [ bily-dgx3 ]
    # if you want to run it only on brrt's DGX instance:
    # runs-on: brrt-dgx3
    needs: setup-airflow
    steps:
      - name: Check out Repository Code
        id: checkout
        uses: actions/checkout@v3
      
      - name: Copy Docker Model repository to runner
        if: steps.checkout.outcome == 'success'
        id: copy-docker-model
        run: |
          cp -r $GITHUB_WORKSPACE/docker_model  ${{ runner.temp }}

      - name: Dotenv Action
        if: steps.checkout.outcome == 'success'
        id: dotenv
        uses: falti/dotenv-action@v1.0.4

      - name: Build Docker Image if it does not exist
        id: build-docker-image
        if: steps.dotenv.outcome == 'success'
        run: |
          IMAGE_TAG=${{ steps.dotenv.outputs.jobname }}
          IMAGE_EXISTS=$(docker images -q "$IMAGE_TAG")
          if [[ -z "$IMAGE_EXISTS" ]]; then
            echo "Docker image $IMAGE_TAG does not exist. Building..."
            docker build -t $IMAGE_TAG ${{ runner.temp }}/docker_model
            echo "docker_image_built=true" >> $GITHUB_OUTPUT
          else
            echo "Docker image $IMAGE_TAG already exists. Skipping build."
            echo "docker_image_built=false" >> $GITHUB_OUTPUT
          fi
      
      - name: Check if docker_model folder has changed
        if: steps.build-docker-image.outputs.docker_image_built == 'false'
        uses: dorny/paths-filter@v2.11.1
        id: docker-model-filter
        with:
          base: 'pipeline'
          filters: |
            docker_model:
              - 'docker_model/**'

      - name: Stop Containers using Old Image if docker_model folder has changed
        if: steps.docker-model-filter.outputs.docker_model == 'true'
        id: stop-containers
        run: |
          IMAGE_NAME=${{ steps.dotenv.outputs.jobname }}
          OLD_CONTAINER_IDS=$(docker ps -q --filter "ancestor=$IMAGE_NAME")
          if [[ -n "$OLD_CONTAINER_IDS" ]]; then
            docker stop $OLD_CONTAINER_IDS
          else
            echo "No containers using the old image found."
          fi
      
      - name: Rebuild Docker Image if docker_model folder has changed
        if: steps.stop-containers.outcome == 'success'
        id: build-docker-image-2
        run: |
          IMAGE_TAG=${{ steps.dotenv.outputs.jobname }}
          echo "Docker image $IMAGE_TAG has changed. Rebuilding..."
          docker rmi "$IMAGE_TAG"
          docker build -t $IMAGE_TAG ${{ runner.temp }}/docker_model

      - name: Build task images
        id: build-task-images
        run: |
          cd ${{ steps.dotenv.outputs.shorty }}/docker-tasks
          for d in */; do
              pushd $d
              IMAGE_TAG="${{ steps.dotenv.outputs.shorty }}/${d%/}"
              docker build -t $IMAGE_TAG .
              popd
          done


      - name: Copy DAG from repository to runner
        id: copy-dag
        run: |
          # TODO: Change once airflow is in project root.
          cp -r ${{ github.workspace }}/dags ${{ steps.dotenv.outputs.pipeline_home_host }}/airflow
        
```