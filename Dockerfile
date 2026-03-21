# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

# Install deps (Linux — Windows SWC binary will be skipped automatically)
RUN npm ci

COPY . .

RUN npm run build

# Stage 2: Serve static files with nginx
FROM nginx:alpine

COPY --from=builder /app/out /usr/share/nginx/html

# Custom nginx config for Next.js static export (clean URLs, 404 fallback)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
