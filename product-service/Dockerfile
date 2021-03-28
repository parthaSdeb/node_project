FROM node:latest

WORKDIR /app

COPY ./package.json ./

ENV PORT=3000

RUN npm install

COPY ./ ./

EXPOSE $PORT

COPY ./wait-for-it.sh ./

RUN chmod +x /app/wait-for-it.sh

# ENTRYPOINT [ "npm", "start" ]