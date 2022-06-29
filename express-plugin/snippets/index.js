const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    parse('data/pom.xml', r => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(r.pomObject))
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
