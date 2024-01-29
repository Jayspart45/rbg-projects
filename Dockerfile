# Use an official Node.js image as the base image
FROM node:21-alpine 

WORKDIR /app

COPY package*.json .

RUN npm install

# Copy the rest of the frontend application code to the container
COPY . .

EXPOSE 8006

# Build the frontend application
CMD ["npm", "run","dev"]

# CMD ["serve","-d","./dist","-p","8006"]