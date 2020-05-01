#!/bin/bash

while getopts ":f:" opt; do
  case $opt in
  f)
    filepath="$OPTARG"
    ;;
  \?)
    echo "Usage : ./backup.sh [-f dump_output_filepath] if no option provided : dump.sql in current directory"
    ;;
  esac
done


if [[ -z $filepath ]]; then
  filepath="backup.sql"
fi


docker exec database /usr/bin/mysqldump -u bible_user --password=docker bible > $filepath

