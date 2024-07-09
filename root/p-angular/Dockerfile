FROM node:20.9.0

WORKDIR /app

COPY ./root/p-angular/package.json ./root/p-angular/yarn.lock ./
COPY ./root/app.tsconfig.json /app/app.tsconfig.json
COPY ./root/assets /app/assets
COPY ./root/data /app/data
COPY ./root/services /app/services
COPY ./root/types /app/types
COPY ./root/utils /app/utils
COPY ./root/p-angular /app/p-angular

WORKDIR /app/p-angular

RUN yarn

ENV HOST '0.0.0.0'
ENV PORT 8082
EXPOSE 8082

COPY . .

RUN yarn build

CMD ["yarn", "preview"]