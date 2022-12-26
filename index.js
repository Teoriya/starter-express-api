const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json({type: 'application/gzip'}))
app.post('/mail', (req, res) => {
    console.log(req)
    res.status(200).send('OK')
})
app.listen(process.env.PORT || 3000)