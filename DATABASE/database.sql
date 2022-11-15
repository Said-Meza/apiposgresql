 CREATE DATABASE library

 CREATE TABLE users
 (
    id serial PRIMARY KEY,
    NAME VARCHAR(40),
    EMAIL text

 );

INSERT into users (NAME,EMAIL) VALUES ('NATSU','NAT@GMAIL.COM'),
                                      ('LUCY','LUC@GMAIL.COM')

