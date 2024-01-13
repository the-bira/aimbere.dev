FROM node:18.18.2-alpine AS builder

RUN mkdir -p /app
WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN apk add git

RUN yarn

COPY . .

RUN yarn build

CMD ["yarn", "start:prod"]