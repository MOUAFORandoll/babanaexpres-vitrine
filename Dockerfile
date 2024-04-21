
#  build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./

RUN npm config set registry https://registry.npmjs.org/
# RUN npm install vue-loader@latest --save-dev
RUN npm install --force
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

