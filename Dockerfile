FROM node:17.7.1-alpine

WORKDIR /app

COPY . .


RUN npm install


CMD ["npm", "start"]