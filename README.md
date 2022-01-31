# Zoomies

Zoomies is an online, searchable database of animals who need homes. Where Oganizations can create accounts and use the plataform to increase the effectiveness of pet adoption and Users can search, look and apply for the adoption of one of those pups and kitts!

Link to live site: [Zoomies](https://aa-zoomies.herokuapp.com/)

- [Database Schema](https://github.com/jaguitart/zoomies/wiki/Database-Schema)
- [Features](https://github.com/jaguitart/zoomies/wiki/Features)


![ZoomiesLogin](https://github.com/jaguitart/zoomies/blob/main/react-app/public/readme-img/login.png?raw=true)

## At A Glance
Zoomies is a full stack web application with two kinds of users, that allows 
### logged users-organizations can:
 - Post a photos and information about a pet
 - Edit a those posts
 - Delete a their posts
 - Review applications sent by regular users
 ### logged regular users can:
 - Send applications for an specific pet
 - Edit their applications
 - Delete their applications
 - Check the status of their sent applications
 

## Application Architecture
Zoomies is built with a React/Redux frontend and an Python/Flask backend. PostgreSQL/SQLalchemy is also used as a database. Docker and Heroku for the live server.

## Tech-Stack
Javascript
React JS
Redux
Flask
SQLalchemy
PostgreSQl
Docker
Heroku


## Key Features
### User Authorization
User authorization. When users log in, the password they provide is rehashed and checked against the original password.
Sign up form:
![Splash Page](https://github.com/jaguitart/zoomies/blob/main/react-app/public/readme-img/singup.png?raw=true)

### Post/Edit/Delete a Pet-Post
An authorized organization-user can post photos and information about the pet that can then be seen by any logged in user. Only the authorized user may then edit or delete the posted photos.
![Create a Pet-Post](https://github.com/jaguitart/zoomies/blob/main/react-app/public/readme-img/pet-post.png?raw=true)

### Post/Edit/Delete a Application
An authorized regular user may send applications to an specific pet post posted by any organization. Only the authorized regular user can then delete or edit the application before this is reviewed by the pet-post owner. Organization-users are able to aprove or reject this applications, if they approved their post inmediatly gets unavailable for the rest of the users.
![Create an Application](https://github.com/jaguitart/zoomies/blob/main/react-app/public/readme-img/applications.png?raw=true)
