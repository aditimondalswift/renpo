FROM node:18

WORKDIR /app

# Disable strict SSL temporarily
RUN npm config set strict-ssl false

# Install nodemon globally
RUN npm install -g nodemon

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000
CMD ["nodemon", "src/index.js"]