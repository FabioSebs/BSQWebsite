# Installing Dependencies
FROM node:alpine AS builder
WORKDIR /frontend
COPY package.json .
RUN yarn

# Running Project
FROM node:alpine AS runner
COPY . .
CMD ["yarn", "dev"]