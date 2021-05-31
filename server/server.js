const express = require('express'),
      cors = require('cors'),
      dayjs = require('dayjs'),
      app = express(),
      server = app.listen(4000, () => console.log('Server is up and running at port 4000')),
      io = require('socket.io')(server, {
            cors: {
                  origin: 'https://localhost:3000'
            },
      })
     

      //controllers
const time = require('./controllers/time')
const checkout = require('./controllers/checkout')
const sendFile = require('./controllers/sendfile')


      //middlewares
      app.use(express.json())
      app.use(cors())
    

//socket.io
io.on("connection", socket => {
      console.log(socket.id)

      //listen from client with socket.on and then sends to all clients with io.emit
      socket.on('sendData', () => {
       console.log('received')
             //sends to all clients
            io.emit('sendmessage')
      })
})


     app.get('/getfile', (req, res) => sendFile.handleSendFile(req, res))
     app.get('/time', (req, res) => time.handleTime(req, res, dayjs))
     app.post('/checkout', (req, res) => checkout.handleCheckout(req, res, dayjs))