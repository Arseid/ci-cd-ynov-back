# ci-cd-ynov-back

## Description

This repository contains the backend dedicated to managing Posts for the ReactJS application in the ci-cd-ynov repo.  
It provides a REST API developed with ExpressJS, connected to a MongoDB database, and is designed to be easily deployed and tested via Docker and CI/CD pipelines.

> **Note:** This backend only manages Posts.  
> User management (CRUD, authentication) is handled by a Flask API and a MySQL database in the main repository [ci-cd-ynov](https://github.com/Arseid/ci-cd-ynov).

## Main Features

- RESTful API for managing Posts
- MongoDB database (with seed data)
- Ready for deployment via Docker
- Unit tests (Jest) and end-to-end tests (Cypress)
- Continuous integration and automated deployment

## Quick Start

### Prerequisites

- Docker & Docker Compose

### Start the project

```bash
docker-compose up --build
```

- The API will be accessible on port 3000 (configurable).
- MongoDB will be initialized with data from `mongo-seed/posts.json`.

### API Documentation

Swagger documentation is available at:  
`http://localhost:3000/api-docs`

## CI/CD Pipeline

- **Automated tests:** Unit and E2E tests are run on every push.
- **Build & deployment:** Docker images are built and deployed automatically.
- **Chained trigger:** At the end of this pipeline, the pipeline of the main repository [ci-cd-ynov](https://github.com/Arseid/ci-cd-ynov) is automatically triggered to ensure consistency across the entire application.