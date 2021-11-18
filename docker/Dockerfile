FROM nginx


ENV WEBROOT=/usr/share/nginx/html


# copy website
COPY build/ $WEBROOT/

# COPY docs
COPY docs/build/ $WEBROOT/docs/

RUN ls $WEBROOT


