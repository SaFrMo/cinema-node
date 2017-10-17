const express = require('express')
const fs = require('fs')
const router = express.Router()

// Make sure a config file exists
if( !fs.existsSync('api/config.json') ){
    fs.writeFileSync('api/config.json', '{}')
}
const config = require('./config.json')
const basePath = config.path || ''

router.get('/heartbeat', (req, res) => {
    res.json({
        message: 'API up and running!'
    })
})

router.get(':show/:season?/:episode', (req, res) => {
    const path = `${ basePath }${ req.params.show }/${ req.params.season || '' }${ req.params.episode }.mp4`

    if( !fs.existsSync(path) ){
        res.status(404)
        res.json({
            message: `Show '${ req.params.show }' episode '${ req.params.episode }' not found.`
        })
        return
    }

    const fileSize = fs.statSync(path).size
    const range = req.headers.range

    if( range ){
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize - 1
        const chunkSize = (end-start) + 1
        const file = fs.createReadStream( path, { start, end } )

        const head = {
            'Content-Range': `bytes ${ start }-${ end }/${ fileSize }`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunkSize,
            'Content-Type': 'video/mp4'
        }
        res.writeHead(206, head)
        file.pipe(res)

    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        }
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
    }
})

module.exports = router
