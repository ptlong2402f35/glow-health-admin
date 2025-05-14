# Build
FROM node:16-slim as builder
ENV APP_ENV production
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run landing:build
RUN npm run landing:ssrbuild
CMD ./prerun.sh > src/static/env.js ; npm run landing:ssr
