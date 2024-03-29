# Backend - Todo List App

### This backend will be the backbone of my todolist app.

## Dependencies Used

- express.js
- morgan
- nodemon
- dotenv
- mongoose
- cors

## Route Map

The user will be able to use these routes to create, read, update and delete on the application.

| Route name  | endpoint | method | Description                 |
| ----------- | -------- | ------ | --------------------------- |
| router.get |  /   | GET    | Renders all todos on a page |
| router.post |  /   | POST    | Renders a created todo on the Index Page |
| router.put | /:id   | PUT    | Updates data to a todo on the Todos Index by id |
| router.delete | /:id   | DELETE   | Removes a todo from the data array |
| router.get | /:id   | GET  | Shows a todo by ID |

## BONUS
This application will incorporate user authentication

### Dependencies

- jsonwebtoken
- bcryptjs

### Route Map

| Route name  | endpoint | method | Description                 |
| ----------- | -------- | ------ | --------------------------- |
| app.post |  /signup   | POST    | The user can create a username and password |
| app.post |  /login   | POST    | The user can login with their created username and password - a token is created |