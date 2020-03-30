FROM node:latest

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN npm install
RUN npm install mysql

EXPOSE 3000