CREATE DATABASE IF NOT EXISTS `mecanizou`;
CREATE DATABASE IF NOT EXISTS `mecanizou_test`;
CREATE USER IF NOT EXISTS 'root'@'%' IDENTIFIED BY 'root';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%';
FLUSH PRIVILEGES;