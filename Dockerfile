# Use a specific version to be repeatable
FROM mhart/alpine-node:4
COPY . /code
EXPOSE  8081
WORKDIR /code
ENV NODE_ENV production
RUN npm install --production
CMD ["npm", "start"]
