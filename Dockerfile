FROM node:14

RUN npm install nodemon -g

WORKDIR /usr/favooks

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000
CMD [ "nodemon", "index.ts" ]