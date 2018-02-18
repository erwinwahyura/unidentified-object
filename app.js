// init
const express = require('express');
const bodyParser = require('body-parser');

// routing index
const index = require('./routes');

// basic usage
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('views', './views')
app.set('view engine', 'pug')

// use router
app.use('/', index)

app.listen(3000, () => console.log('listening on port 3000'))

module.exports = app;
