# code-auth-server

Example code to implement authentication/authorization server.

## Tech Stack

- Node.js + node-dev/nodemon
- Express.js + CORS
- Postman
- MongoDB + Mongoose

## REST API

| Endpoint | HTTP | Description |
| -------- | ---- | ----------- |
| `/`      | GET  | Get root    |

| Endpoint            | HTTP | Description                          |
| ------------------- | ---- | ------------------------------------ |
| `/users`            | GET  | Get all users (need auth token)      |
| `/users/:id`        | GET  | Get one user by id (need auth token) |
| `/users/seed`       | POST | Seed several new users               |
| `/users/register`   | POST | Register new users                   |
| `/users/login`      | POST | Login existing user                  |
| `/users/logout`     | GET  | Logout logged in user                |
| `/users/checktoken` | GET  | Check if token is exist              |

| Endpoint | HTTP | Description   |
| -------- | ---- | ------------- |
| `/tasks` | GET  | Get all tasks |
