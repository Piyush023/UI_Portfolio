# Use an official node image as the base (Node version 23)
FROM node:23-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application with ESLint warnings as warnings, not errors
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the application in production mode
CMD ["npm", "start"]