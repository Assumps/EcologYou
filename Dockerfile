FROM node:16.9.1:alpine

WORKDIR /web

ADD package.json .

RUN npm run i

ADD . .

RUN npm run build

CMD npm run start

EXPOSE 3000