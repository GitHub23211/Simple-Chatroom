const express = require('express')
require('express-async-errors')
const morgan = require('morgan')
const errorhandler = require('errorhandler')
const cookieParser = require('cookie-parser')
const notifier = require('node-notifier')
const cors = require('cors')

const router = require('./routes')
const config = require('./config')
const imgstore = require('./imgstore')


function errorNotification (err, str, req) {
    var title = 'Error in ' + req.method + ' ' + req.url
  
    notifier.notify({
      title: title,
      message: str
    })
  }

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.static("build"))
app.use(cors({
  credentials: true,
  origin: config.corsClientDomain
}))
if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorhandler({ log: errorNotification }))
  }
app.use(cookieParser(config.sessionSecret))
app.use(imgstore.upload.single("image"))
app.use('/', router)


module.exports = app