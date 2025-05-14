# Build
FROM node:16-slim as builder
ENV APP_ENV production
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run admin:build
RUN npm run admin:ssrbuild
CMD ./prerun.sh > src/static/env.js ; npm run admin:ssr
