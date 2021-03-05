const express = require('express')
const path = require('path')
const http = require('http')
const socketio =  require('socket.io')


const app = express();
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname,'../public');
app.use(express.static(publicDirectoryPath))

io.on('connection',(socket)=>{
    console.log("socket connected")
    socket.emit('message',"Welcome!")
    socket.broadcast.emit('message','A new user joined!')

    socket.on('sendMessage',(msg)=>{
        io.emit('message',msg)
    })

    socket.on('sendLocation',({latitude,longitude})=>{
        io.emit('message',`https://google.com/maps?q=${latitude},${longitude}`)

    })
    socket.on('disconnect',()=>{
        io.emit('message','A user has left!')
    })
   
    
})

server.listen(port,(error,data)=>{
    if(error){
        return console.log(error)
    }
    console.log("Listening on "+port)
})

/*
Run by - npm run dev
npm run start
*/

 /*console.log("socket connected")
    socket.emit('incrementUpdated',count)
    socket.on('increment',()=>{
        count++;
        //This socket.emit is gonna emit this event to only a particular socket, which triggred this connection
        //socket.emit('incrementUpdated',count)

        //This io.emit is gonna emit this event to all of the available connected clients, kind of broadcast
        io.emit('incrementUpdated',count)
    })*/