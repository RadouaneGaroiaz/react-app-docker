FROM node:17.7.1-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm install react-scripts --openssl-legacy-provider

CMD ["npm", "start"]