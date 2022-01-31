# Zoomies

Zoomies is an online, searchable database of animals who need homes. Rescue and adoption organizations can create accounts and use the platform to increase the effectiveness of pet adoption and Users (potential pet owners) can search for adoptable animals, read about adoptable animals, and apply to adopt one of our dogs and cats!

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
Zoomies is built with a React/Redux frontend and an Python/Flask backend. PostgreSQL/SQLalchemy is also used as a database. Docker and Heroku are used for the live server.

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
When users log in, the password they provide is rehashed and checked against the original password.
Sign up form:
![Splash Page](https://github.com/jaguitart/zoomies/blob/main/react-app/public/readme-img/singup.png?raw=true)

### Post/Edit/Delete a Pet-Post
An authorized organization-user can post photos and information about the pet that can then be seen by any logged in user. Only the authorized user may then edit or delete the posted photos.
![Create a Pet-Post](https://github.com/jaguitart/zoomies/blob/main/react-app/public/readme-img/pet-post.png?raw=true)

### Post/Edit/Delete a Application
An authorized regular user may send applications to a specific pet post posted by any organization. Only the authorized regular user can then delete or edit the application before the application is reviewed by the pet-post owner. Organization-users are able to approve or reject applications associated with their posts. If they approve an application, the associated post immediately becomes unavailable to the rest of the users.
![Create an Application](https://github.com/jaguitart/zoomies/blob/main/react-app/public/readme-img/applications.png?raw=true)
