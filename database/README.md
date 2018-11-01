# Docker MongoDB Database

> Run Mongodb in a Docker container

## Quick Start

```bash
# Run in Docker
docker-compose up
# use -d flag to run in background

# Tear down
docker-compose down

# To be able to edit files, add volume to compose file
volumes: ['./:/usr/src/app']

# To re-build
docker-compose build

```

## Dev Server
Use the Node Express dev server to develop the model and API. 
Develop middle ware that can be placed in the main POC app