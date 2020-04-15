FROM node:latest

# Create bible app directory
WORKDIR /usr/src/bible

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY ./tsconfig.json ./

# Copy source code
COPY ./generated ./generated
COPY ./back ./back
COPY ./front ./front

# Build application
RUN npm run build

# Start application
EXPOSE 3300
CMD ["npm", "run", "run"]
