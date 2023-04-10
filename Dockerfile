FROM node:16 AS builder

WORKDIR website

COPY . .

RUN npm ci
RUN npm run build

FROM nginx:1.23

COPY --from=builder ./website/build /usr/share/nginx/html

EXPOSE 80
