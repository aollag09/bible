-- Update User native password
ALTER USER 'bible_user' IDENTIFIED WITH mysql_native_password BY 'docker';

-- Create Test database
-- create database bible_test;
-- grant all privileges on database bible_test to bible_user;
