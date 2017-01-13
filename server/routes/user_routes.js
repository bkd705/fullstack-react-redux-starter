import express from 'express'
import mongoose from 'mongoose'
import User from '../models/User'

const app = express(),
      db = mongoose.connection

app.get('/all', (req, res) => {
  User.find({}, (err, users) => {
    err ? console.log(err) : res.send({
      success: true,
      users
    })
  })
})

app.get('/:username', (req, res) => {
  User.find({ 'username': req.params.username }, (err, user) => {
    err ? console.log(err) : res.send({ 
      success: true,
      user
    })
  })
})

app.put('/update', (req, res) => {
  User.update({ 'username': req.body.username }, req.body, err => console.log(err))
})

app.delete('/delete/:id', (req, res) => {
  User.remove({ '_id': req.params.id }, err => {
    err ? console.log(err) : res.send({
      success: true,
      message: 'User deleted successfully!'
    })
  })
})

export default app