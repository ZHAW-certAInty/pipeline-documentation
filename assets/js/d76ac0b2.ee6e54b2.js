"use strict";(self.webpackChunkmlops_pipeline=self.webpackChunkmlops_pipeline||[]).push([[929],{3905:(e,n,o)=>{o.d(n,{Zo:()=>l,kt:()=>h});var t=o(7294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function a(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=t.createContext({}),u=function(e){var n=t.useContext(c),o=n;return e&&(o="function"==typeof e?e(n):s(s({},n),e)),o},l=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(o),m=r,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return o?t.createElement(h,s(s({ref:n},l),{},{components:o})):t.createElement(h,s({ref:n},l))}));function h(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=o.length,s=new Array(i);s[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[d]="string"==typeof e?e:r,s[1]=a;for(var u=2;u<i;u++)s[u]=o[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4687:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var t=o(7462),r=(o(7294),o(3905));const i={sidebar_position:2},s="GitHub Actions",a={unversionedId:"developer-guide/github_actions",id:"developer-guide/github_actions",title:"GitHub Actions",description:"Prerequesites",source:"@site/docs/developer-guide/github_actions.md",sourceDirName:"developer-guide",slug:"/developer-guide/github_actions",permalink:"/pipeline-documentation/developer-guide/github_actions",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Development Setup",permalink:"/pipeline-documentation/developer-guide/development_setup"},next:{title:"Airflow",permalink:"/pipeline-documentation/developer-guide/airflow"}},c={},u=[{value:"Prerequesites",id:"prerequesites",level:2},{value:"Implementation",id:"implementation",level:2}],l={toc:u},d="wrapper";function p(e){let{components:n,...o}=e;return(0,r.kt)(d,(0,t.Z)({},l,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"github-actions"},"GitHub Actions"),(0,r.kt)("h2",{id:"prerequesites"},"Prerequesites"),(0,r.kt)("p",null,"To effectively monitor the pipeline's repository, you need an active self-hosted runner on DGX, as detailed ",(0,r.kt)("a",{parentName:"p",href:"development_setup#airflow-worker-setup"},"here"),"."),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"To configure and maintain GitHub Actions, it's essential to work within the pipeline's ",(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows")," directory. The current configuration appears as follows, with the three most critical lines highlighted:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'branches: [ "pipeline" ]'),": This line specifies the branch that GitHub Actions monitors."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"runs-on: [ bily-dgx3 ]"),": When multiple runners are configured for this repository, this line determines which specific runner will be utilized for the current job.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: CI-certAInty\nrun-name: ${{ github.job }} is built on DGX and monitored by Airflow\n\n# Controls when the workflow will run\non:\n  # Triggers the workflow on push request events but only for the \"pipeline\" branch\n  push:\n  // highlight-next-line\n    branches: [ \"pipeline\" ]\n\n  # Allows you to run this workflow manually from the Actions tab\n  workflow_dispatch:\n\n# A workflow run is made up of one or more jobs that can run sequentially or in parallel\njobs:\n  setup-airflow:\n    # The type of runner that the job will run on\n    //highlight-next-line\n    runs-on: [ bily-dgx3 ]\n    # if you want to run it only on brrt's DGX instance:\n    # runs-on: brrt-dgx3\n\n    # Steps represent a sequence of tasks that will be executed as part of the job\n    steps:\n      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it\n      - name: Check out Repository Code\n        id: checkout\n        uses: actions/checkout@v3\n\n      - name: Dotenv Action\n        if: steps.checkout.outcome == 'success'\n        id: dotenv\n        uses: falti/dotenv-action@v1.0.4\n\n      - name: Check or launch airflow\n        if: steps.dotenv.outcome == 'success'\n        id: check-or-launch-airflow\n        run: |\n          pushd ${{ steps.dotenv.outputs.pipeline_home_host }}\n          if [ -z `docker compose ps -q airflow-scheduler` ] || [ -z `docker ps -q --no-trunc | grep $(docker compose ps -q airflow-scheduler)` ]; then\n            echo \"Airflow is not running. Starting airflow.\"\n            docker compose up -d\n          else\n            echo \"Airflow is running.\"\n          fi\n          popd\n\n      - name: Check if Airflow worker Docker container exists\n        if: steps.check-or-launch-airflow.outcome == 'success'\n        id: check-airflow-worker\n        run: |\n          container_name=${{ format('{0}-{1}', steps.dotenv.outputs.jobname, 'airflow-worker') }}\n          container_id=$(docker ps -aqf \"name=$container_name\")\n      \n          if [[ -z \"$container_id\" ]]; then\n            echo \"No container with name $container_name was found\"\n          else\n            echo \"container_id=$container_id\" >> $GITHUB_OUTPUT\n            echo \"Container $container_name with id $container_id found\"\n          fi\n\n      - name: Stop Airflow worker Docker container if exists\n        if: steps.check-airflow-worker.outputs.container_id != ''\n        id: stop-airflow-worker\n        run: |\n          container_name=${{ format('{0}-{1}', steps.dotenv.outputs.jobname, 'airflow-worker') }}\n          container_id=${{ steps.check-airflow-worker.outputs.container_id }}\n          echo \"Stopping Docker container with name $container_name and id $container_id\"\n          docker stop \"$container_id\"\n\n      - name: Check if Airflow worker SLURM job exists\n        if: steps.check-airflow-worker.outcome == 'success' || steps.check-airflow-worker.outputs.container_id == ''\n        id: check-slurm\n        run: |\n          job_name=${{ format('{0}-{1}', steps.dotenv.outputs.jobname, 'airflow-worker') }}\n          job_id=$(squeue -h -o \"%i\" -n \"$job_name\")\n      \n          if [[ -z \"$job_id\" ]]; then\n            echo \"No SLURM job with name $job_name was found\"\n          else\n            echo \"job_id=$job_id\" >> $GITHUB_OUTPUT\n            echo \"Job $job_name with id $job_id found\"\n          fi  \n\n      - name: Cancel Airflow worker SLURM job if exists\n        if: steps.check-slurm.outputs.job_id != ''\n        id: cancel-slurm\n        run: |\n          job_name=${{ format('{0}-{1}', steps.dotenv.outputs.jobname, 'airflow-worker') }}\n          job_id=${{ steps.check-slurm.outputs.job_id }}\n          echo \"Canceling SLURM job with name $job_name and id $job_id\"\n          scancel \"$job_id\"\n      \n      - name: Run Airflow worker SLURM job and Docker container\n        if: steps.cancel-slurm.outcome == 'success' || steps.check-slurm.outputs.job_id == ''\n        id: run-slurm\n        run: |\n          srun --job-name=${{ format('{0}-{1}', steps.dotenv.outputs.jobname, 'airflow-worker') }} --ntasks=${{ steps.dotenv.outputs.ntasks }} --cpus-per-task=${{ steps.dotenv.outputs.cpus }} --mem=${{ steps.dotenv.outputs.mem }} --gres=gpu:${{ steps.dotenv.outputs.gpu }} bash -c 'nvidia-docker run --shm-size=16g --network ${{ steps.dotenv.outputs.network_docker }} --rm --name ${{ format('{0}-{1}', steps.dotenv.outputs.jobname, 'airflow-worker') }} -e DUMB_INIT_SETSID=0 -v ${{ steps.dotenv.outputs.pipeline_home_host }}/airflow/dags:${{ steps.dotenv.outputs.airflow_home_docker }}/dags -v ${{ steps.dotenv.outputs.pipeline_home_host }}/airflow/logs:${{ steps.dotenv.outputs.airflow_home_docker }}/logs -v ${{ steps.dotenv.outputs.pipeline_home_host }}/datasets:/app/datasets -v /var/run/docker.sock:/var/run/docker.sock -u root ${{ format('{0}/{1}', steps.dotenv.outputs.shorty, 'airflow') }} airflow celery worker -q ${{ format('{0}-{1}', steps.dotenv.outputs.jobname, 'queue') }}' &\n          \n      - name: Check Slurm Job Status\n        if: steps.run-slurm.outcome == 'success'\n        id: check-slurm-job-status\n        run: |\n          retries=5\n          delay=10\n          count=0\n          job_name=${{ format('{0}-{1}', steps.dotenv.outputs.jobname, 'airflow-worker') }}\n          while [ $count -lt $retries ]; do\n            if squeue -u $USER -n ${{ format('{0}-{1}', steps.dotenv.outputs.jobname, 'airflow-worker') }} > /dev/null; then\n              echo \"Slurm job $job_name is running\"\n              # Continue with the next steps or actions\n              break\n            else\n              echo \"Slurm job ${{ format('{0}-{1}', steps.dotenv.outputs.jobname, 'airflow-worker') }} is not running\"\n\n              if [ $count -eq $((retries-1)) ]; then\n                echo \"Maximum retries reached. Exiting...\"\n                # Handle the case when the job is not running after maximum retries\n                break\n              fi\n\n              echo \"Waiting for $delay seconds...\"\n              sleep $delay\n              count=$((count+1))\n            fi\n          done\n\n      - name: Check Docker Container Status\n        if: steps.check-slurm-job-status.outcome == 'success'\n        id: check-docker-container-status\n        run: |\n          retries=5\n          delay=10\n          count=0\n          container_name=${{ format('{0}-{1}', steps.dotenv.outputs.jobname, 'airflow-worker') }}\n          while [ $count -lt $retries ]; do\n            if docker ps -f \"name=$container_name\" > /dev/null; then\n              echo \"Docker container $container_name is running\"\n              # Continue with the next steps or actions\n              break\n            else\n              echo \"Docker container $container_name is not running\"\n\n              if [ $count -eq $((retries-1)) ]; then\n                echo \"Maximum retries reached. Exiting...\"\n                # Handle the case when the job is not running after maximum retries\n                break\n              fi\n\n              echo \"Waiting for $delay seconds...\"\n              sleep $delay\n              count=$((count+1))\n            fi\n          done\n\n  docker-build:\n  //highlight-next-line\n    runs-on: [ bily-dgx3 ]\n    # if you want to run it only on brrt's DGX instance:\n    # runs-on: brrt-dgx3\n    needs: setup-airflow\n    steps:\n      - name: Check out Repository Code\n        id: checkout\n        uses: actions/checkout@v3\n      \n      - name: Copy Docker Model repository to runner\n        if: steps.checkout.outcome == 'success'\n        id: copy-docker-model\n        run: |\n          cp -r $GITHUB_WORKSPACE/docker_model  ${{ runner.temp }}\n\n      - name: Dotenv Action\n        if: steps.checkout.outcome == 'success'\n        id: dotenv\n        uses: falti/dotenv-action@v1.0.4\n\n      - name: Build Docker Image if it does not exist\n        id: build-docker-image\n        if: steps.dotenv.outcome == 'success'\n        run: |\n          IMAGE_TAG=${{ steps.dotenv.outputs.jobname }}\n          IMAGE_EXISTS=$(docker images -q \"$IMAGE_TAG\")\n          if [[ -z \"$IMAGE_EXISTS\" ]]; then\n            echo \"Docker image $IMAGE_TAG does not exist. Building...\"\n            docker build -t $IMAGE_TAG ${{ runner.temp }}/docker_model\n            echo \"docker_image_built=true\" >> $GITHUB_OUTPUT\n          else\n            echo \"Docker image $IMAGE_TAG already exists. Skipping build.\"\n            echo \"docker_image_built=false\" >> $GITHUB_OUTPUT\n          fi\n      \n      - name: Check if docker_model folder has changed\n        if: steps.build-docker-image.outputs.docker_image_built == 'false'\n        uses: dorny/paths-filter@v2.11.1\n        id: docker-model-filter\n        with:\n          base: 'pipeline'\n          filters: |\n            docker_model:\n              - 'docker_model/**'\n\n      - name: Stop Containers using Old Image if docker_model folder has changed\n        if: steps.docker-model-filter.outputs.docker_model == 'true'\n        id: stop-containers\n        run: |\n          IMAGE_NAME=${{ steps.dotenv.outputs.jobname }}\n          OLD_CONTAINER_IDS=$(docker ps -q --filter \"ancestor=$IMAGE_NAME\")\n          if [[ -n \"$OLD_CONTAINER_IDS\" ]]; then\n            docker stop $OLD_CONTAINER_IDS\n          else\n            echo \"No containers using the old image found.\"\n          fi\n      \n      - name: Rebuild Docker Image if docker_model folder has changed\n        if: steps.stop-containers.outcome == 'success'\n        id: build-docker-image-2\n        run: |\n          IMAGE_TAG=${{ steps.dotenv.outputs.jobname }}\n          echo \"Docker image $IMAGE_TAG has changed. Rebuilding...\"\n          docker rmi \"$IMAGE_TAG\"\n          docker build -t $IMAGE_TAG ${{ runner.temp }}/docker_model\n\n      - name: Build task images\n        id: build-task-images\n        run: |\n          cd ${{ steps.dotenv.outputs.shorty }}/docker-tasks\n          for d in */; do\n              pushd $d\n              IMAGE_TAG=\"${{ steps.dotenv.outputs.shorty }}/${d%/}\"\n              docker build -t $IMAGE_TAG .\n              popd\n          done\n\n\n      - name: Copy DAG from repository to runner\n        id: copy-dag\n        run: |\n          # TODO: Change once airflow is in project root.\n          cp -r ${{ github.workspace }}/dags ${{ steps.dotenv.outputs.pipeline_home_host }}/airflow\n        \n")))}p.isMDXComponent=!0}}]);