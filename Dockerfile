# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

ARG ENV_FILE
# Checking if passed because if not it will just use already present .env
COPY ${ENV_FILE:-.env} .env

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# Final image
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]