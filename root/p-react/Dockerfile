FROM node:20.9.0

WORKDIR /app

COPY ./root/p-react/package.json ./root/p-react/yarn.lock ./
COPY ./root/app.tsconfig.json /app/app.tsconfig.json
COPY ./root/assets /app/assets
COPY ./root/data /app/data
COPY ./root/services /app/services
COPY ./root/types /app/types
COPY ./root/utils /app/utils
COPY ./root/p-react /app/p-react

WORKDIR /app/p-react

RUN yarn

ENV HOST '0.0.0.0'
ENV PORT 8081
EXPOSE 8081

COPY . .

RUN yarn build

CMD ["yarn", "preview"]