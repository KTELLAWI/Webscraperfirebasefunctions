# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install Firebase CLI and dependencies
RUN npm install -g firebase-tools && npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 5000 for the Firebase Functions emulator
EXPOSE 5000

# Set the command to run the Firebase Functions emulator
CMD ["firebase", "emulators:start", "--only", "functions"]
