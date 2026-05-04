const express = require('express')
const blog = require('./routes/blog') //this stores the location of blog in a variable
const shop = require('./routes/shop') //this stores the location of blog in a variable

const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog) //whenver '/blog' is used it uses blog.js
app.use('/shop', shop) //whenver '/shop' is used it uses shop.js


//get request can be testing directly by seeing the browser
app.get('/', (req, res) => {
    console.log("Hey its a get request")
    res.send('Hello World2!')
})

//but in post request we need to make a page or use postman to test
app.post('/', (req, res) => {
    console.log("Hey its a post request")
    res.send('Hello World Post!')
})

//same for put request
app.put('/', (req, res) => {
    console.log("Hey its a put request")
    res.send('Hello World Put!')
})

//all the above functions can be chained this is called chaining of request(it does not change anything)
// app.get('/', (req, res) => {
//     console.log("Hey its a get request")
//     res.send('Hello World21!')
// }).post('/', (req, res) => {
//     console.log("Hey its a post request")
//     res.send('Hello World post!')
// }).put('/', (req, res) => {
//     console.log("Hey its a put request")
//     res.send('Hello World put!')
// })

//serving HMTL files
//this wont give you the html file
// app.get("/index",(req, res) => {
//     console.log("Hey its index")
//     res.send('Hello World index!')
// })

//this will give you the html file
app.get("/index",(req, res) => {
    console.log("Hey its index")
    //first part is the path of the file but computer does not know where template is so root is used to get the directory
    res.sendFile('templates/index.html',{root: __dirname})  
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
