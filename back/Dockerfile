FROM node:14.7.0-alpine3.12 AS production
LABEL MAINTAINER Kevin <kevin.pizuch@gmail.com>

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

#RUN apk add --update \
#    python2 \
#    make \
#    g++ \
#    git \
#    autoconf \
#    automake \
#    libtool \
#    file \
#    pkgconfig \
#    nasm \
#    zlib-dev

RUN mkdir -p /usr/src/back
WORKDIR /usr/src/back
COPY ./ /usr/src/back

RUN yarn install
RUN npm install -g strapi@3.6.2
# && npm cache clean

EXPOSE 39002

RUN yarn build

CMD ["yarn", "start"]

# --------------------------------------------- #

FROM production AS development

CMD ["yarn", "develop"]
