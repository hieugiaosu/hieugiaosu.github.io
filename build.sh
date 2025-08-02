#!/bin/bash

# Copy data files to public directory
echo "Copying data files to public directory..."
cp data/*.yaml public/data/

echo "Data files copied successfully!"

# Build the project
echo "Building the project..."
npm run build

echo "Build completed!"
