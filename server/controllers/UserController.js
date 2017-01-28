import mongoose from 'mongoose'
import User from '../models/User'

const db = mongoose.connection

const getAllUsers = (req, res) => {
  User.find({}, (err, users) => {
    err ? console.log(err) : res.send({
      success: true,
      users
    })
  })
}

const getUserByUsername = (req, res) => {
  User.find({ 'username': req.params.username }, (err, user) => {
    err ? console.log(err) : res.send({ 
      success: true,
      user
    })
  })
}

const updateUser = (req, res) => {
  User.update({ 'username': req.body.username }, req.body, err => console.log(err))
}

const deleteUser = (req, res) => {
  User.remove({ '_id': req.params.id }, err => {
    err ? console.log(err) : res.send({
      success: true,
      message: 'User deleted successfully!'
    })
  })
}

export default {
  getAllUsers: getAllUsers,
  getUserByUsername: getUserByUsername,
  updateUser: updateUser,
  deleteUser: deleteUser
}