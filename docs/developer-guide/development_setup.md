---
sidebar_position: 2
---

# Development Setup

## Docker

A good understanding of [Docker](https://docs.docker.com/) is recommended.

## Slurm

It also makes sense to understand  [slurm's](https://slurm.schedmd.com/) functionality.

## Primer

For a comprehensive introduction to the use of Slurm and Docker, you can refer to this informative [PDF](/pdf/dgx_workflow_notes.pdf) guide, which covers essential concepts and best practices.

## Prerequisites

If the pipeline is to be executed on [CAI's DGX cluster](http://160.85.252.56:8088/superset/dashboard/11/), the developer must establish a connection to the ZHAW network, either on-site or remotely via VPN.

An SSH connection to a DGX instance should be configured as explained [here](https://cai.cloudlab.zhaw.ch/pages/general/ssh.html).

It is highly recommended to use [VSCode](https://code.visualstudio.com/) and its [Remote SSH Extension](https://code.visualstudio.com/docs/remote/ssh) for development as it allows neat automatic port forwarding.

:::caution

After running the pipeline, you must forward the ports of the Airflow and MLflow webserver to access their UIs. If it's not done automatically by VSCode, you have to forward them manually as explained [here](https://cai.cloudlab.zhaw.ch/pages/gpu/dgx-servers/docker_and_ssh.html#setting-up-ssh-forwarding).

:::
