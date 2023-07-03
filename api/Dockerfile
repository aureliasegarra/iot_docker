FROM mhart/alpine-node:6.11.0

# Copy package.json and package-lock.json
COPY package*.json /app/

# Use /app working directory
WORKDIR /app

# Install dependencies
RUN npm install

# Install Express
RUN npm install express

# Copy src files
COPY . /app/

# Expose http port
EXPOSE 1337

# Run application
CMD ["npm", "start"]