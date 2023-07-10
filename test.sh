#!/bin/bash

# Update the system
sudo apt-get update
sudo apt-get upgrade -y

# Install Git
sudo apt-get install -y git

# Install Node.js and npm
sudo apt-get install -y nodejs npm

# Install Python 3 and pip
sudo apt-get install -y python3 python3-pip

# Install Java (OpenJDK)
sudo apt-get install -y openjdk-11-jdk

# Install Ruby
sudo apt-get install -y ruby-full

# Install Nginx
sudo apt-get install -y nginx

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