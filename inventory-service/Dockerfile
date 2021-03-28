FROM node:latest

WORKDIR /app

COPY ./package.json ./

ENV PORT=3000

RUN npm install

COPY ./ ./

EXPOSE $PORT

ENTRYPOINT [ "npm", "start" ]