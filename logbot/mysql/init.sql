CREATE DATABASE robot_db;
USE robot_db;

CREATE TABLE robot (
    robot VARCHAR(255) PRIMARY KEY,
    estado VARCHAR(255),
    bateria INT
    posicion INT
);

CREATE TABLE paquete (
    id INT PRIMARY KEY,
    posicion INT,
    ancho INT,
    alto INT,
    largo INT,
    stado VARCHAR(255),
    peso INT
);
