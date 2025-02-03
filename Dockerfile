FROM nginx:latest
RUN mkdir -p /usr/share/nginx/html/images
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./woodez-logo.jpg /usr/share/nginx/html/images/woodez-logo.jpg
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# RUN service nginx restart
