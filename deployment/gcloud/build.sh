#/bin/bash


# build database
bible
cd database
gcloud builds submit --tag gcr.io/bible-276312/database

# build api
bible
cd api
gcloud builds submit --tag gcr.io/bible-276312/api

# build web
bible
cd web
gcloud builds submit --tag gcr.io/bible-276312/web

# build logstash
bible
cd logstash
gcloud builds submit --tag gcr.io/bible-276312/logstash

