CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (

id int NOT NULL AUTO_INCREMENT
name_burger varchar(100) NOT NULL,
devoured BOOL DEFAULT false,
PRIMARY KEY (id)
);
