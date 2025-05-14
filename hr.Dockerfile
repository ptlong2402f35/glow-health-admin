# Build
FROM node:16-slim as builder
ENV APP_ENV production
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run hr:build
RUN npm run hr:ssrbuild
CMD ./prerun.sh > src/static/env.js ; npm run hr:ssr
