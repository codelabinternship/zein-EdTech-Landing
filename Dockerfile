# Use the official Node.js image as a base
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install --save --force

# Copy the rest of your application code to the container
COPY . .

# Expose the port your app will run on
EXPOSE 3000

# Run the application
CMD ["npm", "run","dev"]
