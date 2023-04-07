#!/bin/bash

# Stop and remove containers
cd deploy
docker-compose down

# Start containers using Docker Compose
docker-compose up -d

echo "All containers restarted successfully"

