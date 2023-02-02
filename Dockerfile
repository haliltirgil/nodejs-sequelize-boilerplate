FROM node:lts-alpine

ENV SERVER_PORT=8000

ENV NODE_ENV="dev"
# ENV NODE_ENV="test"

# Development -> NODE_ENV='dev'
ENV DB_NAME="SequelizeBoilerplate"
ENV DB_USER="postgres"
ENV DB_PASS="12345"
ENV DB_HOST="localhost"

# Test -> NODE_ENV='test'
ENV TEST_DB_NAME="SequelizeBoilerplateTest"
ENV TEST_DB_USER="postgres"
ENV TEST_DB_PASS="12345"
ENV TEST_DB_HOST="localhost"

WORKDIR /app

COPY package*.json ./ 

RUN npm config set strict-ssl-false -g 
RUN npm config set proxy null
RUN npm config set https-proxy null
RUN npm config set http-proxy null
RUN npm install

USER node

COPY . .

CMD [ "npm", "start"]

EXPOSE 8000
