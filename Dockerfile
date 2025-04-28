FROM node:18-alpine

WORKDIR /app

ARG ENV_FILE
COPY ${ENV_FILE} .env

COPY package.json .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]