FROM node:16.17.0

WORKDIR /usr/src

COPY . .

RUN npm i

RUN npm run build

CMD ["npm", "run", "start:prod"]
