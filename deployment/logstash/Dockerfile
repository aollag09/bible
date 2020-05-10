
FROM docker.elastic.co/logstash/logstash:7.6.2

# Install dependency
RUN /usr/share/logstash/bin/logstash-plugin install --no-verify logstash-integration-jdbc

# Copy lib database jdbc jars
COPY ./connector/mysql-connector-java-8.0.19.jar /usr/share/logstash/logstash-core/lib/jars/mysql-connector-java.jar

# Copy configuration
COPY ./config /usr/share/logstash/config

# Copy Pipelines
COPY ./pipelines /usr/share/logstash/pipelines

# Expose port
EXPOSE 5001
