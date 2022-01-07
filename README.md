# Video-Rental-node
Using html &amp; css version, create connection with database and server validation


1. Activate database

Move to directory docker
```
$ cd ../Video-Rental-node/video-rental/docker
```
Launch docker container
```
$ docker-compose up
```
Instead docker you can use MySql database on port: 3306, if there are problems, check if you have created a database schema named: video-rental-project

name: root password: root It can be changed in: cd  ../Video-Rental-node/video-rental/config/sequelize.js

2. Launch website

Move to main directory
```
$ cd ../Video-Rental-node/video-rental
```
Install npm
```
$ npm install
```
Launch npm
```
$ npm start
```
Move to website: http://localhost:3000/
