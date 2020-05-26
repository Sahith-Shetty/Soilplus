FROM node:12.7-alpine AS build

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
WORKDIR /usr/src/soilplus

COPY package.json ./
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/soilplus/dist/SoilApp /usr/share/nginx/html
