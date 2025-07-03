FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install --save-dev @types/bluebird @types/continuation-local-storage @types/debug @types/lodash @types/ms @types/sequelize @types/validator
COPY . .

RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]
