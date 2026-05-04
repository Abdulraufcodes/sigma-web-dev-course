const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")

//Middleware 1
app.use((req, res, next) => {
    console.log(req.headers)
    req.rauf = "I am Rauf"
    fs.appendFileSync('rauf.txt',`${Date.now()} is a ${req.method}\n`)
    // res.send("hacked by middleware 1") 
    next()
})

//middleware 2
app.use((req, res, next) => {
    console.log('m1')
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!' + req.rauf)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
