const express = require('express')
const app = express()
const router = require('./api')
const path = require('path')

app.use('/v1', router)

app.use('/', (req, res) => {
    res.status(404).json({
        data: {
            message: 'Path not found. Use \'v1/\' route to access API.'
        }
    })
})

app.listen(3000, function () {
    console.log('cinema-node listening on port 3000!')
})
