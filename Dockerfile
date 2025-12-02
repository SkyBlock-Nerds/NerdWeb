# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Final image
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
RUN npm i -g serve
EXPOSE 3000
CMD ["serve", "-s", "dist"]