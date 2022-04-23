FROM node:latest as build-step

ARG ENV=prod
ARG APP=co-client

ENV ENV ${ENV}
ENV APP ${APP}

WORKDIR /app
COPY ./ /app

RUN npm ci
RUN npm run build --prod
RUN mv /app/dist/${APP}/* /app/dist/

FROM nginx:latest

COPY --from=build-step /app/dist/ /usr/share/nginx/html
COPY ./docker-config/nginx.conf /etc/nginx/conf.d/default.conf
