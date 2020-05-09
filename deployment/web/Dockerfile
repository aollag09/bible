################################
### Buildtime environement

FROM node:latest as react-build

# Create bible app directory
WORKDIR /usr/src/bible

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./package*.json ./

RUN npm install
# If you are building your code for production
#RUN npm ci --only=production

# Type script compilation file
COPY ./tsconfig.json ./

# Copy env file
COPY ./.env ./

# Copy source code
COPY ./src ./src
COPY ./public ./public

# Build application
RUN npm run build



################################
### Runtime environement


# Server environment based on nginx
FROM nginx:alpine

# Copy configuration file
COPY ./nginx.conf /etc/nginx/conf.d/configfile.template

# Port & host
ENV PORT 8080
ENV HOST 0.0.0.0

# Replace env variable in configuration file
RUN sh -c "envsubst '\$PORT'  < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf"

# Copy build result from react build
COPY --from=react-build /usr/src/bible/build /usr/share/nginx/html

# Export required port
EXPOSE 8080

# Server start command
CMD ["nginx", "-g", "daemon off;"]

