FROM node:7
WORKDIR /awsdemo
COPY package.json /awsdemo
RUN npm install
COPY . /awsdemo
CMD node server.js
EXPOSE 8000