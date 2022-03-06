# create databases
CREATE DATABASE IF NOT EXISTS `library`;
-- CREATE DATABASE IF NOT EXISTS `secondary`;
CREATE TABLE IF NOT EXISTS library.Books
(
    id       int auto_increment
        primary key,
    bookName varchar(50) not null
);
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%';
