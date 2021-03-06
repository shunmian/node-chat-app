const express = require('express')
const path = require('path')
const socketIO = require('socket.io')
const http = require('http')

const port = process.env.PORT || 3000
const app = express()
const viewRootPath = path.join(__dirname, './../public')
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(viewRootPath))

io.on('connection', (socket) => {
  console.log('Now user connected')
  // socket.emit('newMessage', {
  //   from: 'andrew@example.com',
  //   text: 'hey'
  // })

  socket.on('createMessage', (message)=>{
    console.log('createMessage', message)
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    })
  })

  socket.on('disconnect', () => {
    console.log('Now user disconnected')
  })
})

server.listen(port, () => {
  console.log(`server start on ${port}`)
})
