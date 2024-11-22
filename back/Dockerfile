FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./src ./src

COPY tsconfig.json .

RUN npm install -g typescript
RUN tsc

EXPOSE 8080

CMD ["npm", "run", "dev"]
