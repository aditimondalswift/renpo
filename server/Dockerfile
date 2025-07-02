# api/Dockerfile
FROM node:20-alpine

WORKDIR /usr/src/app
COPY package.json package-lock.json tsconfig.json ./
RUN npm ci

COPY src ./src
RUN npm run build

EXPOSE 5000
CMD ["npm", "start"]