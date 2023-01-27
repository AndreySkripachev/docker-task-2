FROM node:18-alpine as base
WORKDIR /api

COPY ./api/build .

EXPOSE 8000
CMD ["node",  "index"]
