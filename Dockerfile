FROM node:16-alpine

ENV APP_ROOT /app
ARG ENV=sample
ENV ENV=${ENV}

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN cp .env.${ENV} .env

EXPOSE 8080

RUN yarn install

RUN yarn build 

CMD yarn start
