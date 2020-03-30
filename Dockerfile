FROM node:latest

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN npm install
RUN npm install -g mysql2

EXPOSE 3000