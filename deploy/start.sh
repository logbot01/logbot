#!/bin/bash

# Load environment variables from config.env file
source config.env

# Create network if not exists
docker network create --subnet=$SUBNET my-network 2> /dev/null || true

# Start containers using Docker Compose
cd deploy
docker-compose up -d

echo "All containers started successfully"
