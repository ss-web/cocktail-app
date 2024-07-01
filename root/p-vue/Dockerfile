FROM node:20.9.0

WORKDIR /app

COPY ./root/p-vue/package.json ./root/p-vue/yarn.lock ./
COPY ./root/app.tsconfig.json /app/app.tsconfig.json
COPY ./root/assets /app/assets
COPY ./root/data /app/data
COPY ./root/services /app/services
COPY ./root/types /app/types
COPY ./root/utils /app/utils

COPY ./root/p-vue /app/p-vue

WORKDIR /app/p-vue

ENV HOST '0.0.0.0'
ENV PORT 8080
EXPOSE 8080

RUN yarn

COPY . .

RUN yarn build


CMD ["yarn", "preview"]