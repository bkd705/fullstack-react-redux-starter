import express from 'express'
import User from '../models/User'
import UserController from '../controllers/UserController'

const app = express()

app.get('/all', UserController.getAllUsers)

app.get('/:username', UserController.getUserByUsername)

app.put('/update', UserController.updateUser)

app.delete('/delete/:id', UserController.deleteUser)

export default app