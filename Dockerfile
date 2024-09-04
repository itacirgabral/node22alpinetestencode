FROM node:22.7-alpine

COPY package.json package.json

COPY index.js index.js

RUN npm install

CMD [ "npm", "start" ]