FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

RUN npm i mongoose

COPY --chown=node:node . .

RUN ./node_modules/.bin/ng build

EXPOSE 3000

CMD [ "node", "app.js" ]