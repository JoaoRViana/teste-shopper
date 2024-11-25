FROM node:18 AS build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 80

CMD ["start"]
ENTRYPOINT ["npm"]