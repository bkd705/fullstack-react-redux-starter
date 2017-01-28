import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../config'
import User from '../models/User'

const db = mongoose.connection

const handleSignup = (req, res) => {
  const password_digest = bcrypt.hashSync(req.body.password, 10)

  const _user = User({
    username: req.body.username,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: password_digest
  })

  _user.save(err => {
    if (err) {
      console.log(err)
      if(err.name === 'MongoError' && err.code === 11000) {
        return res.status(500).send({
          success: false,
          message: 'User alreay exists!'
        })
      }

      return res.status(500).send(err)
    } else {
      res.send({
        success: true,
        message: 'User created!'
      })
    }
  })
}

const handleLogin = (req, res) => {
  const { username, password } = req.body
  User.findOne({ 'username': username }, (err, user) => {
    if(user) {
      if(bcrypt.compareSync(password, user.password)) {
        const storedUser = {
          email: user.email,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName
        }
        const token = jwt.sign(storedUser, config.jwtSecret)
        res.json({ token })
      } else {
        res.status(401).send({
          success: false,
          message: 'Invalid credentials'
        })
      }
    } else {
      res.status(401).send({
        success: false,
        message: 'Invalid credentials'
      })
    }
  })
}

export default {
  signup: handleSignup,
  login: handleLogin
}