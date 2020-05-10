FROM mysql:8.0.19

# Set env variable
ENV MYSQL_DATABASE="bible" \
    MYSQL_ROOT_PASSWORD="dokcer" \
    MYSQL_USER="bible_user" \
    MYSQL_PASSWORD="docker"

# Copy schema sql files
COPY ./schema/ /docker-entrypoint-initdb.d

# Copy data sql files
COPY ./data/ /docker-entrypoint-initdb.d

# Expose database port
EXPOSE 3306
