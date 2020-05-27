FROM node:12.7-alpine
WORKDIR /app
USER root
COPY . /app
RUN npm install -g --allow-root
RUN chown -R 1000:1000 /app
USER 1000
ENV NODE_ENV production
ENV PORT 4200
EXPOSE 4200
CMD ["npm", "start"]
