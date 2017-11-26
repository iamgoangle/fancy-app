# :ok_woman: goangle fullstack api
This project provides you the boilerplate for generate the RESTFul with Authentication as JWT token based.

# Table of Contents
- [Requirement](#panda_face-requirements)
- [Installation](#installation)
- [Usage example (for dev)](#bicyclist-usage_example_for_dev)
- [Coverage](#coverage)
- Project Struture
- Features
- [Technology](#technology)
- [API Routes](#api_route)

# :panda_face: Requirements
- NodeJs 8.0+
- MongoDB

You will install nodejs on your development environment. I totally recommended using `nvm`

# Installation
**This project implement based on nodejs so you would need install npm module dependency via**
```sh
npm i

or

yarn install
```

**In order to import mongo db collection you should change your current directoty to `./db` and then run the command as below**
```
seed.sh
```

**config .env to relate with your infrastructure**

:wrench: .env Example
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

# :bicyclist: Usage example (for dev)
`npm run start:dev`
or
`yarn start:dev`

# Coverage
```sh
npm run cover
```

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

# :zap: Features
:ballot_box_with_check: Token based authentication

:ballot_box_with_check:Refresh token and Access token

:ballot_box_with_check:Auto load process.env (only dev)

:ballot_box_with_check:Helmet security

# Technology
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

# API Routes

:key: = Authentication required

## Authentication
POST `/api/login`

## User
:key: POST `/api/user/signup`

:key: POST `/api/user/:username`

:key: POST `/api/user/getUsers`

:key: POST `/api/user/updateUserPreference`

## Currecy
GET `/api/currency/getCurrencies`

## Timezone
GET `/api/timezone/getTimezones`

## Language
GET `/api/language/getLanguages`