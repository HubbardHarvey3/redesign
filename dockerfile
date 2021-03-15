FROM node:12-alpine
WORKDIR /redesign
RUN npm install
COPY . .
CMD [ "node", "app.js" ]