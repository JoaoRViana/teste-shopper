FROM node:18-alpine

WORKDIR /back-app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g typescript
RUN tsc

EXPOSE 8080

CMD ["npm", "run", "dev"]
