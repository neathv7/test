
FROM node:10-alpine as builder
# install and cache app dependencies
WORKDIR /woori-ib-portal
COPY . .

FROM nginx:1.16.0-alpine
COPY --from=builder /woori-ib-portal /usr/share/nginx/html
#RUN rm /etc/nginx/conf.d/default.conf
#COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

