FROM node:16.16.0-alpine

ADD package.json /app/package.json

RUN cd /app \
    && npm install --omit=dev

ADD . /app/


CMD ["node" , "/app/app.js"]