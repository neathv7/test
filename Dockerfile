FROM nginxinc/nginx-unprivileged
COPY  /woori-ib-portal /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
#CMD ["nginx", "-g", "daemon off;"]
