const express = require('express')
const app = express()
const router = require('./api')

app.use('/v1', router)

app.use('*', (req, res) => {
    res.status(404).json({
        data: {
            message: "Path not found."
        }
    })
})

app.listen(3000, function () {
    console.log('cinema-node listening on port 3000!')
})
