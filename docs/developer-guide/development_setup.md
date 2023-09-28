---
sidebar_position: 2
---

# Development Setup

## Docker

A good understanding of [Docker](https://docs.docker.com/) is recommended.

:::caution Docker Compose

To run the pipeline, you'll need to have **Docker Compose** installed on your instance. For DGX, manual installation is required, and you can find the installation instructions [here](https://docs.docker.com/compose/install/linux/#install-the-plugin-manually).

:::

## Slurm

It also makes sense to understand  [slurm's](https://slurm.schedmd.com/) functionality.

## Primer

For a comprehensive introduction to the use of Slurm and Docker, you can refer to this informative [PDF](/pdf/dgx_workflow_notes.pdf) guide, which covers essential concepts and best practices.

## Prerequisites

If the pipeline is to be executed on [CAI's DGX cluster](http://160.85.252.56:8088/superset/dashboard/11/), the developer must establish a connection to the ZHAW network, either on-site or remotely via VPN.

An SSH connection to a DGX instance should be configured as explained [here](https://cai.cloudlab.zhaw.ch/pages/general/ssh.html).

It is highly recommended to use [VSCode](https://code.visualstudio.com/) and its [Remote SSH Extension](https://code.visualstudio.com/docs/remote/ssh) for development as it allows neat automatic port forwarding.

:::info Deployment

The current deployment scenario of the pipeline requires `Docker` and `Slurm` to be running on the instance of deployment.
Whereas the pipeline would run on `Docker` only, the workers that run [DAGs](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/dags.html) are automatically created in new `Slurm` jobs.
This follows our desire to separate the concerns into containers and thereby requires us to work with Airflow's [Celery Executor](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/executor/celery.html).

:::

## Pipeline Setup

Create a directory of your choice and clone the pipeline repo into it.

```
mkdir pipeline && cd pipeline
```
```
git clone git@github.com:ZHAW-certAInty/toolbox.git
```
```
cd toolbox
```

Checkout the pipeline branch and navigate to the directory where the `docker-compose.yml` and its corresponding `.env` file is located.
```
git checkout pipeline
```
```
cd bily
```

To configure the `.env` file and avoid port collisions, follow these steps:

1. Open the `.env` file for editing.

2. Locate the following lines in the `.env` file:
    - `AIRFLOW_WEBSERVER_PORT`
    - `MLFLOW_WEBSERVER_PORT`
    - `OXEN_PORT`

3. Update the values of these variables to ensure they do not collide with other ports on DGX, following the guidelines provided [here](https://cai.cloudlab.zhaw.ch/pages/gpu.html#id1).

Set your `AIRFLOW_UID` and `ZHAW_SHORTY` in the `.env` file by executing the following lines in the shell:
```
[[ -f .env ]] && (grep -q "^AIRFLOW_UID=" .env && sed -i "s/^AIRFLOW_UID=.*/AIRFLOW_UID=$(id -u)/" .env && echo "AIRFLOW_UID changed to $(id -u)") || (echo -e "\nAIRFLOW_UID=$(id -u)" >> .env && [[ -f .env ]] && echo "AIRFLOW_UID=$(id -u) added to the .env file")
```
```
[[ -f .env ]] && (grep -q "^ZHAW_SHORTY=" .env && sed -i "s/^ZHAW_SHORTY=.*/ZHAW_SHORTY=$(whoami)/" .env && echo "ZHAW_SHORTY changed to $(whoami)") || (echo -e "\nZHAW_SHORTY=$(whoami)" >> .env && [[ -f .env ]] && echo "ZHAW_SHORTY=$(whoami) added to the .env file")
```

Create a `screen` or `tmux` session and allocate sufficient resources for both the Airflow and MLflow webservers and their respective backend components within Slurm.

In the typical setup, each service and its dependencies run within dedicated and isolated Docker containers. However, they all belong to the same network to facilitate seamless communication among them.

For [Airflow](airflow), these components encompass a scheduler responsible for monitoring all tasks and DAGs, triggering task instances once their dependencies are complete, a PostgreSQL database, and a Redis broker that forwards messages from the scheduler to the workers.

The current [MLflow](mlflow) deployment scenario includes a PostgreSQL backend and a MinIO artifact store. MLflow uses for storing runs and artifacts a two components for storage: backend store and artifact store.
While the backend store persists MLflow entities (runs, parameters, metrics, tags, notes, metadata, etc), the artifact store persists artifacts (files, models, images, in-memory objects, or model summary, etc).

[Oxen](https://docs.oxen.ai/getting-started/intro) runs self-contained, and initially, all datasets located in the `OXEN_DATA_DIR` as defined in the `env` file will be pushed to the data repository.

```
screen -S pipeline
```
```
srun --job-name=<ZHAW-SHORTY>-pipeline --pty --ntasks=1 --cpus-per-task=4 --mem=32G bash
```

To run the pipeline, execute the following command:
```
docker compose up
```

:::caution Port Forwarding

To access their UIs, you must forward the ports of the Airflow and MLflow webserver. If it's not done automatically by VSCode's Remote SSH Extension, you have to forward them manually as explained [here](https://cai.cloudlab.zhaw.ch/pages/gpu/dgx-servers/docker_and_ssh.html#setting-up-ssh-forwarding).

:::

## Pipeline Test

1. Detach from the `screen` or `tmux` session.
2. Check for errors in the setup process by running the following command:
```
docker compose logs
```
This will display the logs, allowing you to identify and troubleshoot any potential issues.

3. Test the successful setup by accessing Airflow's and MLflow's web servers in your browser. You can typically do so by opening the following URLs:
    - Airflow Web Server: `http://localhost:<AIRFLOW_WEBSERVER_PORT>`
    - MLflow Web Server: `http://localhost:<MLFLOW_WEBSERVER_PORT>`
    - Make sure to replace `<AIRFLOW_WEBSERVER_PORT>` and `<MLFLOW_WEBSERVER_PORT>` with the respective forwarded ports of those in your `.env` file.

## Airflow Worker Setup

At present, GitHub serves as the entry point for MLEs seeking to utilize the pipeline. By pushing changes to the `pipeline` branch of the [pipeline's repo](https://github.com/ZHAW-certAInty/toolbox/tree/pipeline), MLEs can initiate the process.
To accommodate concurrent work on multiple ML models, each push of an ML model to GitHub triggers the creation of a dedicated worker on DGX. These workers are responsible for handling the corresponding models, ensuring parallel processing.
To establish this communication and orchestration, it is essential to have a self-hosted runner operational on the pipeline's DGX instance as explained [here](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners).

## Pipeline Breakdown

1. Attach to the pipeline's `screen` or `tmux` session.
2. Stop the containers gracefully by hitting `Ctrl`+`C`
3. Remove the containers and orphans
```
docker compose down --remove-orphans
```
4. Ask your admin to delete all folders created by the Docker daemon, i.e. "airflow", "db", and "minio".
