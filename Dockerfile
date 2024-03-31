FROM node:18.15.0-alpine

# set the working directory
WORKDIR /api

# copy the scripts to the folder
COPY . /api

# install dependencies
RUN npm install

# start the server
CMD [ "npm", "start" ]