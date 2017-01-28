import express from 'express'
import AuthController from '../controllers/AuthController'

const app = express()

app.post('/signup', AuthController.signup)

app.post('/login', AuthController.login)

export default app
