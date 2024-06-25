# Define the variables
PROJECT_NAME = frontend
SRC_DIR = src
BUILD_DIR = dist

# Phony targets are not real files
.PHONY: all install build start clean docker-build docker-start docker-stop

# Default target
all: install build

# Install dependencies
install:
	npm install

# Compile TypeScript to JavaScript
build: clean
	npm run build

# Start the application using Docker Compose
start: 
	npm run dev

# Clean the build directory
clean:
	rm -rf $(BUILD_DIR)

# Additional targets for convenience
test:
	npm test

lint:
	npm run lint
