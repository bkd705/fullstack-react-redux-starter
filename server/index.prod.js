import express from 'express';
import path from 'path';
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

let app = express();

app.use(express.static(path.join(__dirname, 'public/')));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect('mongodb://localhost/data/db/')
const db = mongoose.connection
db.once('open', () => {
  console.log('Connected to MongoDB at /data/db')
})

import authRoutes from './routes/auth_routes'
app.use('/auth', authRoutes)

import userRoutes from './routes/user_routes'
app.use('/user', userRoutes)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(3000, () => console.log('Running on localhost:3000'))
