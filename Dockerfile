# Multi-stage build for React application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install all dependencies (needed for build)
RUN npm ci

# Copy source code
COPY . .

# Build the React application
RUN npm run build

# Production stage
FROM nginx:alpine

# Create nginx conf directory
RUN mkdir -p /etc/nginx/conf.d

# Copy built React app from builder stage (includes all assets)
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy SSL certificates
COPY ./apexkube.crt /etc/ssl/certs/
COPY ./apexkube.key /etc/ssl/private/

# Expose HTTPS port
EXPOSE 443

# Start nginx
CMD ["nginx", "-g", "daemon off;"]