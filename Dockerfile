FROM node

WORKDIR /urs/app

COPY package.json ./

RUN yarn

COPY . .

EXPOSE 5000

CMD ["yarn","run","dev"]