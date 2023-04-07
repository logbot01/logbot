#!/bin/bash

# Stop and remove containers
cd deploy
docker-compose down

echo "All containers stopped successfully"
