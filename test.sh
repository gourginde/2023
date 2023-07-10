#!/bin/bash

# Update the system
apt-get update
apt-get upgrade -y

# Install Git
apt-get install -y git

# Install Node.js and npm
apt-get install -y nodejs npm

# Install Python 3 and pip
apt-get install -y python3 python3-pip

# Install Java (OpenJDK)
apt-get install -y openjdk-11-jdk

# Install Ruby
apt-get install -y ruby-full

# Install Nginx
apt-get install -y nginx

# Change directory to 2023/client
cd /home/ubuntu/2023/client

# Install client dependencies
npm install

# Build the UI
npm run build

# Change directory to 2023
cd /home/ubuntu/2023

# Activate the virtual environment
source venv/bin/activate

# Change directory to backend
cd backend

# Install Flask dependencies
pip install -r requirements.txt

# Run the Flask application (replace with your actual command)
python3 application.py