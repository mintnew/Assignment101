# Base image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package files first (for caching)
COPY app/package*.json ./

# Install dependencies
RUN npm install

# Copy full application code
COPY app/ .

# Expose app port
EXPOSE 3000

# Start application
CMD ["npm", "start"]