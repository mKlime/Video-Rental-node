# Video-Rental-node
Using html &amp; css version, create connection with database and server validation


1. Activate database

Move to directory docker

$ cd ../Video-Rental-node/video-rental/docker

Launch docker container

$ docker-compose up

Zamiast dockera możesz użyć po prostu bazy danych MySql na porcie 3306, jeżeli występują problemy sprawdź czy na pewno masz stworzony schemat bazy o nazwie video-rental-project

name: root password: root It can be changed in: cd  ../Video-Rental-node/video-rental/config/sequelize.js

2. Launch website

Move to main directory

$ cd ../Video-Rental-node/video-rental

Install npm

$ npm install

Launch npm

$ npm start

Move to website: http://localhost:3000/
