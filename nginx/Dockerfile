FROM nginx:1.21.6-alpine
# https://github.com/docker/buildx/issues/415

ARG IDENTIFIER

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/nginx.conf
RUN sed -i "s/web\:8000/${IDENTIFIER}-web\:8000/g" /etc/nginx/conf.d/nginx.conf
RUN sed -i "s/localhost/${IDENTIFIER}.domain.tld/g" /etc/nginx/conf.d/nginx.conf
