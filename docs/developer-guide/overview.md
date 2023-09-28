---
sidebar_position: 1
---

# Overview

## MLOps pipeline

The MLOps pipeline is currently developed and maintained on the [GitHub repository](https://github.com/ZHAW-certAInty/toolbox) of the certAInty project.

## CI/CD

CI/CD is implemented using [GitHub Actions](github_actions). The pipeline is triggered by a push to the `pipeline` branch and consists of the following steps:

- **Entrypoint**: The pipeline is triggered by a push to the pipeline branch.
- **Pushing the Model to DGX**: The model is pushed to the DGX server.

## Orchestration

Within the pipeline, the ML specific workflow is orchestrated by [Airflow](airflow). Airflow initiates the following tasks:

- **Data Versioning**: The data is cloned respectively pulled from the data repository.
- **Data Validation**: The data is validated to ensure that it is of the correct format and that it is not corrupted.
- **Data Transformation**: The data is transformed into the format required by the ML model.
- **Model Training**: The ML model is trained using the transformed data.
- **Model Validation**: The ML model is validated to ensure that it is performing as expected.

## Experiment Tracking

Experiment tracking is done using [MLflow](mlflow). MLflow is responsible for the following tasks:

- **Tracking the Model**: The ML model is tracked using MLflow.
- **Tracking the Model Parameters**: The model parameters are tracked using MLflow.
- **Tracking the Model Metrics**: The model metrics are tracked using MLflow.
- **Tracking the Model Artifacts**: The model artifacts are tracked using MLflow.

## Data Repository

We utilize [Oxen](https://docs.oxen.ai/getting-started/intro) as a framework to create and manage the data repository.
Through versioning, datasets can be effectively tracked, managed, and compared over time.

## Reverse Proxy Configuration

To expand accessibility, both the Airflow and MLflow webservers will be made available to a wider audience through the use of a reverse proxy with [Nginx](nginx).
This approach also eliminates the necessity for users to perform manual port forwarding.
