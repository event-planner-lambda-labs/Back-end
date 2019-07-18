const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

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