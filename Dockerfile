FROM node:12
RUN mkdir -p /app
WORKDIR /app
COPY package.json .
RUN npm install
COPY index.js .
EXPOSE 8888
CMD ["npm", "start"]