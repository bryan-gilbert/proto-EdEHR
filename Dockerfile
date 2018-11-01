FROM node:11

WORKDIR /usr/src/app

COPY package*.json ./

RUN nom install

COPY . .

EXPOSE 3000

RUN ["npm", "start-docker-dev"]
