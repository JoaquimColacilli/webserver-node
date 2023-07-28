const express = require('express')
const hbs = require('hbs')
require('dotenv').config();

const app = express()
const port = process.env.PORT;

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', (err) => {
    console.error(err)
})

app.use(express.static('public'))

app.get('/',  (req,res) => {
    res.render('home', {
        nombre: 'Joaquim',
        titulo: 'Curso de Node'
    })
})

app.get('/generic',  (req,res) => {
    res.render( 'generic', {
        nombre: 'Joaquim',
        titulo: 'Curso de Node'
    })
})

app.get('/elements',  (req,res) => {
    res.render( 'elements', {
        nombre: 'Joaquim',
        titulo: 'Curso de Node'
    })
})

app.get('*',  (req,res) => {
    res.sendFile( __dirname + '/public/404.html')
})


app.listen(port)