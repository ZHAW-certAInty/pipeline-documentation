---
sidebar_position: 3
---

# User Guide

## Prerequisites

Clone the [pipeline's repository](https://github.com/ZHAW-certAInty/toolbox) and checkout the `pipeline` branch.

```
git clone git@github.com:ZHAW-certAInty/toolbox.git
```
```
git checkout pipeline
```

Adapt the `.env` file located in the repository's root directory to match your specific requirements. You can use the following example as a reference with the most crucial lines highlighted:

```js
// highlight-start
shorty=bily
jobname=bily-yolov5
ntasks=1
cpus=8
mem=48G
gpu=1
shm_size=32g
network_docker=bily_certainty-pipeline
//highlight-end
airflow_home_docker=/opt/airflow
// highlight-next-line
pipeline_home_host=/cluster/home/bily/projects/toolbox/bily
```

The `pipeline_home_host` is determined by the location where the pipeline is running on DGX.
By default, `network_docker` is composed of the pipeline's parent folder and the "certainty-pipeline" suffix.

:::caution Dataset

Prior to conducting the experiment, it's essential to upload the dataset that the ML model operates on to the pipeline's data repository.

:::

To accomplish this, please reach out to your designated MLOps engineer responsible for the pipeline.

:::info Templates

As of now, the pipeline's repository provides [three example dags](https://github.com/ZHAW-certAInty/toolbox/tree/pipeline/dags) located in the `/dags` folder.

:::

## Model Training
To initiate model training, you can refer to the YOLOv5 example provided in `dag_bily_yolov5.py`.

## Model Testing
For testing a model that has been trained using the pipeline, you can follow the YOLOv5 example outlined in `dag_bily_test_yolov5.py`.

## Reusing a Trained Model
If you wish to retrain a model based on previous results, please consult `dag_bily_using_trained_yolov5_example.py`.

## Monitor Your Model with Airflow and MLflow

As of now, you must inquire with your assigned MLOps engineer to identify the server instance where Airflow and MLflow are hosted and your credentials.
Once identified, establish a connection to this instance and configure port forwarding for Airflow and MLflow, either [manually](https://cai.cloudlab.zhaw.ch/pages/gpu/dgx-servers/docker_and_ssh.html#setting-up-ssh-forwarding) or [automatically](developer-guide/development_setup#prerequisites).
Following these steps, you can conveniently access their web interfaces through your browser, using a URL such as `http://localhost:8790`.
