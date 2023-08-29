---
sidebar_position: 1
---

# Welcome

## CI/CD Pipeline

The CI/CD pipeline is set up using [GitHub Actions](github_actions). The pipeline is triggered by a push to the pipeline branch. The pipeline consists of the following steps:

- **Entrypoint**: The pipeline is triggered by a push to the pipeline branch.
- **Pushing the Model to DGX**: The model is pushed to the DGX server.

## Orchestration

Within the pipeline, the ML specific workflow is orchestrated by [Airflow](airflow). Airflow is responsible for the following tasks:

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