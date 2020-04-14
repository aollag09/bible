
FROM docker.elastic.co/logstash/logstash:7.6.2

# install dependency
RUN /usr/share/logstash/bin/logstash-plugin install --no-verify logstash-integration-jdbc

# copy lib database jdbc jars
COPY ./connector/mysql-connector-java-8.0.19.jar /usr/share/logstash/logstash-core/lib/jars/mysql-connector-java.jar
