# https://github.com/elastic/logstash-docker
FROM docker.elastic.co/logstash/logstash:7.6.2
USER root
COPY mysql-connector-java-8.0.19.jar /opt/
# Add your logstash plugins setup here
#RUN logstash-plugin install logstash-input-jdbc
# Example: RUN logstash-plugin install logstash-filter-json
#RUN logstash-plugin install logstash-filter-aggregate
