const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


//instead of making individual response
// app.get('/', (req, res) => {
//   res.send('Hello World2!')
// })

// app.get('/about', (req, res) => {
//   res.send('About us')
// })

// app.get('/contact', (req, res) => {
//   res.send('Hello contacts!')
// })

//we instead do this
app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from the db
    // For URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
    console.log(req.params)  // will output { slug: 'intro-to-padosi' }
    console.log(req.query)  // will output { mode: 'dark', region: 'in' }
    res.send(`hello ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
