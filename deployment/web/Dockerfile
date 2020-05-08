FROM node:latest as react-build

# Create bible app directory
WORKDIR /usr/src/bible

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./package*.json ./

RUN npm install
# If you are building your code for production
RUN npm ci --only=production

# Type script compilation file
COPY ./tsconfig.json ./

# Copy env file
COPY ./.env ./

# Copy source code
COPY ./src ./src

# Build application
RUN npm run build

# Build server
RUN npm install -g serve

# Start application
EXPOSE 3001
CMD ["serve", "-s", "build", "-l", "3001"]
