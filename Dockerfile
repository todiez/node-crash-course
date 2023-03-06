FROM node:19.7.0

WORKDIR /app

#copy code and install npm dependencies
COPY . .

RUN npm install