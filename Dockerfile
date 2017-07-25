FROM node:alpine
MAINTAINER Leonardo Javier Gago <ljgago@gmail.com>

RUN apk update && apk add git ffmpeg ca-certificates && update-ca-certificates

RUN git clone https://github.com/ljgago/RainBot

WORKDIR RainBot

RUN npm install -g yarn; yarn

CMD ["node", "index.js"]
