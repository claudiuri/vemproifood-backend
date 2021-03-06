FROM node:10-alpine

WORKDIR /usr/app

ENV CLIENTE_ID=e60bca3e08be4437b74379af3d5393ad
ENV CLIENTE_SECRET=977776d8351046d28763543939cfddc6

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]