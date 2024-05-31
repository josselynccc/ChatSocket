const express = require('express') //importando express
const app = express()
const socket = require('socket.io')


const port = 5500

const morgan = require('morgan')

const path = require('path')

//const userLogged = require('./Middlewares/userLogged')

const {dbConnect} = require('./Database/conection')
dbConnect()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.json())

app.use(morgan('dev'))

app.use(express.static(__dirname + '/public'))

//servidor sin express para usar io
const server = require('http').createServer(app)

//socket
const io = socket(server)

require('./socket')(io)

server.listen(port, ()=>{
    console.log('Aplicacion con express ejecutsndose en el puerto 5500')
})

//se puede usar a nivel global o internamente app.use(userLogged)

app.get('/', (req, res) => {
    const data = {
        "title" : "Chat",
        "message" : "Bienvenido a mi sitio web"
    }
    res.render('index', data)
})


module.exports = app;