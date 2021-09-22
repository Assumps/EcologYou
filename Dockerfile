FROM node:alpine

WORKDIR /web

ADD package.json .

RUN npm install

ADD . .

RUN npm run build

CMD npm run start

EXPOSE 3000