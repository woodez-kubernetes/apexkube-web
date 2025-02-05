FROM nginx:latest
RUN mkdir -p /etc/nginx/conf.d
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./apexkubelogo.jpeg /usr/share/nginx/html/images/apexkubelogo.jpeg
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# certs
COPY ./apexkube.crt /etc/ssl/certs/
COPY ./apexkube.key /etc/ssl/private/
EXPOSE 443
