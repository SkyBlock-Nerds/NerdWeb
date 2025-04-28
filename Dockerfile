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
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist

RUN npm i -g serve

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]