# Build
FROM node:16-slim as builder
ENV APP_ENV production
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run accountance:build
RUN npm run accountance:ssrbuild
CMD ./prerun.sh > src/static/env.js ; npm run accountance:ssr
