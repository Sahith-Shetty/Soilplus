FROM node:12.7-alpine AS build

WORKDIR /app

USER root
COPY . /app
RUN chmod 755 -R /app
RUN npm install --allow-root
RUN chown -R 1000:1000 /app
USER 1000
ENV NODE_ENV production
ENV PORT 4200
EXPOSE 4200
RUN npm run build

FROM nginx:1.17.1-alpine
COPY --from=build /app/dist/SoilApp /usr/share/nginx/html
