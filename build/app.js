'use strict'
const api = require('../static/server')
const express = require('express')
const path = require('path')
const port = 3000

const app = express()

// set up Cinema API
app.use('/v1', api)
// set up client
app.use(express.static('./dist'))

const server = app.listen(port)
console.log(`App running on port ${ port }!`)
