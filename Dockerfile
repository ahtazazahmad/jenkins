FROM node:12.18.1

ENV NODE_ENV=productiontOsTAG

ENV PORT=5241

WORKDIR /app

COPY . .

RUN npm install 

EXPOSE 5241

CMD [ "npm", "start" ]