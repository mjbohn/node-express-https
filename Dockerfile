FROM node:16.16.0-alpine

ADD . /app/

RUN cd /app \
    && npm install --omit=dev

CMD ["node" , "/app/app.js"]