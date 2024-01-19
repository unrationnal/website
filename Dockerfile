# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

ARG NODE_VERSION=19.6.0

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV NODE_ENV production


WORKDIR /app

COPY package.json .

RUN npm install


# Copy the rest of the source files into the image.
COPY . .

# create build for production
RUN npm run build

# copy build files
FROM nginx:stable-alpine

COPY --from=dist /app/dist /usr/share/nginx/html

# Expose the port that the application listens on.
EXPOSE 80

# Run the application.
# CMD ["npm","run","dev","--","--host"]
CMD ["nginx", "-g", "daemon off;"]
