FROM node:alpine AS build

WORKDIR /app
COPY . /app/

RUN npm install
RUN npm run build

FROM nginx:alpine

WORKDIR /etc/nginx/conf.d
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/nginx.conf

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]