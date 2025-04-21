FROM node:18-alpine

WORKDIR /app


COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4201

CMD ["npm", "start"]


