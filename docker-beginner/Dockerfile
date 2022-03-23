FROM node:12

WORKDIR /Users/hightower/repos/new-concepts/docker-beginner

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT 8080

EXPOSE 8080

CMD ["npm","start"]
