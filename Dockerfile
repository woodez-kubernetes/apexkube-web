FROM nginx:latest
RUN mkdir -p /etc/nginx/conf.d
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./wke.html /usr/share/nginx/html/wke.html
COPY ./test.html /usr/share/nginx/html/test.html
COPY ./apexkubelogo.jpeg /usr/share/nginx/html/images/apexkubelogo.jpeg
COPY ./wke.jpeg /usr/share/nginx/html/images/wke.jpeg
COPY ./assets /usr/share/nginx/html/assets
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# certs
COPY ./apexkube.crt /etc/ssl/certs/
COPY ./apexkube.key /etc/ssl/private/
EXPOSE 443
