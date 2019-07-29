const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

const session = require('express session') 

//config express-session 
const sess = {
secret: 'CHANGE THIS TO A RANDOM SECRET',
cookie: {},
resave: false,
saveUninitialized: true};

if (app.get('env') === 'production') {
    sess.cookie.secure = true; // serve secure cookies, requires https
  }
  
  app.use(session(sess));

const server = express()


server.use(express.json())
server.use(helmet())
server.use(cors())

server.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Production of Event Planner'
    })
})

module.exports = server