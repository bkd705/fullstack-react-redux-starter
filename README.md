# Full-Stack React & Redux Boilerplate

A full stack React and Redux boilerplate built on top of Express and MongoDB. Including Redux-Saga setup for watching the full User Authentication included.

## Prerequisites
- [Node.js](https://nodejs.org/en/) (Version 5^)
- [MongoDB](https://www.mongodb.com/)

## Installation
- Clone Repository
`git clone https://github.com/bkd705/fullstack-react-redux-starter.git my-app`

- Install packages from inside folder
`cd my-app && yarn`
(npm users: replace yarn with `npm install`)

- Start project
`yarn start` OR `yarn server:dev` | 
`start` uses `server:prod` by default.

- Project runs on localhost:3000

## Base Project

### Routes

`/auth`


- /auth/login

  _Takes:_
  ```
    username,
    password
  ```
  
  _Returns:_
  ```
    success,
    token
  ```
- /auth/signup

  _Takes:_
  ```
    username,
    email,
    firstName,
    lastName,
    password
  ```
  
  _Returns:_
  ```
    success,
    message
  ```

&nbsp;

`/user`

- /user/update

  _Takes:_
  ```
    username,
    email,
    firstName,
    lastName
  ```

  _Returns:_
  ```
    success, message
  ```
  
- /user/delete/:id

  _Takes:_ `URL params :id`
  
  _Returns:_
  ```
    success,
    message
  ```
  
- /user/all

  _Takes:_ 
  
  _Returns:_
  ```
    success,
    users
  ```
  
- /user/:username

  _Takes:_ `URL params :username`
  
  _Returns:_
  ```
    success,
    user
  ```
  
### Folder Structure
```
client
  - components
    - common
  - layouts
  - pages
  - redux
  - utils
server
  - models
  - public
  - routes
  - utils
shared
  - validations
```

#### Client
Containing all the react files from components, to pages, to the redux & redux-saga actions & watchers.

- __components/common__ contains any re-used components that are common throughout the application. (ie. navbar, footer)

- __layouts__ contains the page layouts for the application which hold the page structure.

- __pages__ contains each seperate container for the components

- __redux__ contains all the redux files needed including actions, reducers, and then redux-saga sagas

- __utils__ contains utility files such as authUtils and api. Mostly abstractions to keep code clean and modular.

#### Server
Containing all the Express and Mongo files including routes, models and the server index

- __models__ contains the MongoDB models for the database

- __routes__ contains the express routes for handling communication between the server and the client

- __public__ contains the assets for the applications front-end

- __utils__ contains back-end utility functions for modularization

#### Shared
Contains whatever files need to be shared between the back-end and front-end

- __validations__ contains validations for the front-end inputs and for the back-end field validation

## TODO
A list of todos for the application, will get done in a timely manner hopefully.

`*` means important

- Server side validation *
- Finish User CRUD on client-side
- Write tests for client-side *
- Write tests for server-side
- Setup CI for running tests and coverage *






