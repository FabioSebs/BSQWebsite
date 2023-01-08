# Installing Dependencies
FROM node:alpine AS builder
WORKDIR /frontend
COPY package.json .
RUN yarn

# Running Project
FROM node:alpine AS runner
WORKDIR /frontend
COPY . .
CMD ["yarn", "dev"]
