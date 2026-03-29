# DevOps Demo Project

## Overview
This project demonstrates a minimal DevOps setup including:
- CI/CD using GitHub Actions
- Docker containerization
- Terraform infrastructure
- Monitoring setup

## CI/CD Pipeline
- Lint
- Test
- Build Docker Image
- Deploy container

## Docker
Build:
docker build -t myapp .

Run:
docker run -p 80:3000 myapp

## Terraform
Initialize:
terraform init

Apply:
terraform apply
