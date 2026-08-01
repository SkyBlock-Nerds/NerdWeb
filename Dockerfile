FROM node:26-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ARG GIT_SHA
ENV GIT_SHA=$GIT_SHA
ENV VITE_GIT_SHA=$GIT_SHA
RUN --mount=type=secret,id=sentry_release_auth_token \
    SENTRY_RELEASE_AUTH_TOKEN=$(cat /run/secrets/sentry_release_auth_token) \
    npm run build

FROM node:26-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
RUN npm i -g serve
EXPOSE 3000
CMD ["serve", "-s", "dist"]
