import express from 'express';
import path from 'path';
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

let app = express();

app.use(express.static(path.join(__dirname, 'public/')));

const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}))

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
