const express = require('express')
const app = express()
app.post('/mail', (req, res) => {
    console.log(req.body)
    res.status(200).send('OK')
})
app.listen(process.env.PORT || 3000)