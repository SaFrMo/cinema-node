const express = require('express')
const app = express()
const router = require('./api')

app.use('/v1', router)

app.use('*', express.static('public'))

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
