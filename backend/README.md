# :ok_woman: goangle fullstack api
This project provides you the boilerplate for generate the RESTFul with Authentication as JWT token based.

# Table of Contents
Updating...

## :panda_face: Requirements
- NodeJs 8.0+
- MongoDB

You will install nodejs on your development environment. I totally recommended using `nvm`

## Installation
1. Install app depedencies via `npm install`
or
`yarn install`
2. Import database collection via `seed.sh`
3. config .env to relate with your infrastructure

## :wrench: .env Example
```
DB_HOST=mongodb://localhost/fancy-app
DB_USER=
DB_PASSWORD=

PORT=5000

ENVIRONMENT=development

API_SECRET=goangleSecret

ACCESS_TOKEN_EXPIRED=6m
REFRESH_TOKEN_EXPIRED=8h

CORS_ORIGIN=http://localhost:3000
CORS_CREDENTIAL=true
```

## :bicyclist: Usage example (for dev)
`npm run start:dev`
or
`yarn start:dev`

# :open_file_folder: Project Structure

```sh
├── README.md
├── config
├── controllers
├── middlewares
├── models
├── node_modules
├── package.json
├── routes.js
├── server.js
├── services
```

## :zap: Features
:ballot_box_with_check: Token based authentication

:ballot_box_with_check:Refresh token and Access token

:ballot_box_with_check:Auto load process.env (only dev)

:ballot_box_with_check:Helmet security

## Technology Stacks
- Express
- Mongo
- Mongoose
- Nodemon
- Passport.js
- JWT
- morgan
- Winston
- bcrypt
- Helmet
- dotenv

## API Routes
```
No authentication needed routes

User registration use case
http://localhost:3000/api/user/signup

User logged-in use case
http://localhost:3000/api/login

Required authentication in header
http://localhost:3000/api/user/getUsers
```

## Access token based authentication only
This version not supports Refresh token, it only have token based authentication only.

## Testing
### Create a simeple user
```
curl -X GET \
  http://localhost:3000/api/user/signup \
  -H 'cache-control: no-cache' \
  -H 'x-access-token: <golf token>'
```

### Get All User in system
```
curl -X GET \
  http://localhost:3000/api/user/getUsers \
  -H 'cache-control: no-cache' \
  -H 'x-access-token: <golf token>
```
### Login use case
```
curl -X POST \
  http://localhost:3000/api/authentication \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -d 'username=golf&password=golf'
```