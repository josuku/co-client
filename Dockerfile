FROM node:latest as build-step-1

ARG ENV=prod
ARG APP=co-client

ENV ENV ${ENV}
ENV APP ${APP}

WORKDIR /app
COPY ./ /app

RUN npm ci

FROM build-step-1 as build-step-2

RUN npm run build --prod
RUN mv /app/dist/${APP}/* /app/dist/

FROM nginx:latest

COPY --from=build-step-2 /app/dist/ /usr/share/nginx/html
COPY ./docker-config/nginx.conf /etc/nginx/conf.d/default.conf
