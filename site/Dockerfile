FROM node:16-buster AS builder

WORKDIR /usr/src/app

COPY package.json package.json 
COPY yarn.lock yarn.lock

RUN yarn

COPY . .

RUN yarn build


FROM nginx:1.19-alpine

COPY --from=builder /usr/src/app/build /usr/share/nginx/html/

