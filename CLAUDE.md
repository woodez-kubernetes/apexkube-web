# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the ApexKube company website - a modern React application containerized with Docker and deployed to Kubernetes using ArgoCD GitOps. The site showcases ApexKube's AI and Vibe consulting services, helping businesses leverage artificial intelligence to improve their operations.

## Architecture

### Core Components
- **React Application**: Modern single-page application built with React 18, TypeScript, and Vite
- **Component Architecture**: Modular design with Navigation and About page components
- **Docker Container**: Multi-stage build with Node.js for building and Nginx for serving
- **Kubernetes Deployment**: Full K8s manifests with Deployment, Service, Ingress, and TLS configuration
- **GitOps Deployment**: ArgoCD Application manifest for automated deployments

### File Structure
- `src/` - React application source code
  - `App.tsx` - Main application component with routing logic
  - `main.tsx` - Application entry point
  - `components/Navigation.tsx` - Navigation component
  - `pages/About.tsx` - About page showcasing AI and Vibe consulting
  - `*.css` - Component-specific styling
- `public/` - Static assets served by Vite
- `dist/` - Built application output (generated)
- `Dockerfile` - Multi-stage container build (Node.js build + Nginx serve)
- `nginx.conf` - Nginx configuration for HTTPS serving
- `manifests/` - Kubernetes deployment manifests
  - `app.yaml` - ArgoCD Application definition
  - `deployments.yaml` - Complete K8s resources (Deployment, Service, Secret, Ingress)

### SSL/TLS Configuration
- Self-signed certificates (`apexkube.crt`, `apexkube.key`) for HTTPS
- TLS termination handled by both Nginx (in container) and Kubernetes Ingress
- Domain: www.apexkube.xyz

## Development Commands

### React Development
```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npx tsc --noEmit
```

### Docker Commands
```bash
# Build container image (includes React build)
docker build -t apexkube-website .

# Run locally
docker run -p 443:443 apexkube-website

# Push to registry
docker tag apexkube-website kwood475/apexkube-website:latest
docker push kwood475/apexkube-website:latest
```

### Kubernetes Commands
```bash
# Apply manifests directly
kubectl apply -f manifests/deployments.yaml

# Check deployment status
kubectl get pods -n woodez
kubectl get svc -n woodez
kubectl get ingress -n woodez
```

### ArgoCD Deployment
The application is deployed using GitOps via ArgoCD:
- Source: https://github.com/woodez-kubernetes/apexkube-web.git
- Target: master branch
- Path: manifests/
- Destination: woodez namespace

## Key Configuration Details

### Container Configuration
- Multi-stage build: Node.js 18 Alpine (build) + Nginx Alpine (serve)
- Build stage: Installs dependencies and builds React app with Vite
- Production stage: Serves built files via Nginx
- Exposes port 443 (HTTPS only)
- SSL certificates mounted at `/etc/ssl/`
- Built React app served from `/usr/share/nginx/html/`

### Kubernetes Configuration
- Namespace: woodez
- Replicas: 2
- Service: ClusterIP on port 443
- Ingress: nginx class with SSL passthrough
- TLS secret: testsecret-tls (base64 encoded certificates)

### Nginx Configuration
- Listens on port 443 with SSL
- Server name: www.apexkube.xyz
- Root directory: /usr/share/nginx/html
- Default index: index.html

## Making Changes

### React Application Changes
1. **Content Updates**: Edit React components in `src/pages/` directory
2. **Styling**: Modify CSS files or add new component styles
3. **New Components**: Create new components in `src/components/`
4. **Navigation**: Update routing logic in `src/App.tsx`
5. **Build Configuration**: Modify `vite.config.ts` for build settings

### Infrastructure Changes
1. **Container Changes**: Update `Dockerfile` and rebuild image
2. **Deployment Changes**: Modify manifests in `manifests/` directory  
3. **SSL Updates**: Replace certificate files and update base64 encoded values in `deployments.yaml`

## Testing

### Development Testing
- **Local Development**: `npm run dev` - Hot reload at http://localhost:3000
- **Production Build**: `npm run build` then `npm run preview`
- **Type Checking**: `npx tsc --noEmit` for TypeScript validation

### Deployment Testing
- **Docker Testing**: Build image and run container locally on port 443
- **Kubernetes Testing**: Deploy to cluster and verify pod/service/ingress status
- **SSL Testing**: Verify certificate validity and HTTPS access

## Technology Stack

- **Frontend**: React 18, TypeScript, CSS3
- **Build Tool**: Vite
- **Styling**: Modern CSS with gradients, flexbox, and responsive design
- **Container**: Multi-stage Docker build
- **Server**: Nginx with SSL/TLS termination
- **Orchestration**: Kubernetes with ArgoCD GitOps