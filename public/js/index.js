var socket = io();
socket.on('connect', function(){
  console.log('connected to server')
});

socket.on('newMessage', function(message){
  console.log('newMessage', message)
})

// socket.emit('createMessage', {
//   to: 'jen@example.com',
//   text: 'Hey'
// })

socket.on('disconnect', function() {
console.log('disconnected to server')
})

