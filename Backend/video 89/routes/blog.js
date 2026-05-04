const express = require('express')
const router = express.Router() //express.Router() creates a smaller, specialized app just for a certain group of routes.

// define the home page route
router.get('/', (req, res) => {
  res.send('Blog home page')
})

// define the about route
router.get('/about', (req, res) => {
  res.send('About blog')
})

// define the about route
router.get('/blogpost/:slug', (req, res) => {
  res.send(`fetch the blogpost for ${req.params.slug}`)
})

module.exports = router //makes the router available to other file like main.js