FROM node:19-alpine
WORKDIR /usr/app
COPY ./../../src/api/package*.json /usr/app
RUN npm install
CMD "npm" "start"