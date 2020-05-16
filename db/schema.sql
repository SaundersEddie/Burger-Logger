-- SQL Schema
-- Eddie Saunders saunders.eddie@outlook.com 13th May 2020
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
)
