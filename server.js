const express = require('express')
const app = express()
const {greeting} = require('./user')

app.get('/', (req,res) => res.send('This App is running properly!'))
app.get('/ping', (req,res) => res.send('Pong!'))
app.get('/instagram', (req,res) => res.send('Hello, instagram indonesia dan kota bandung!'))
app.get('/reddit', (req,res) => res.send('Hello, reddit indonesia dan kota bandung!'))
app.get('/hello/:name', (req,res) => {
    res.json({message:greeting(req.params.name)})
})
module.exports = app
