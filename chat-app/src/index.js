const express = require('express')
const path = require('path')
const http = require('http')
const socketio =  require('socket.io')
const Filter = require("bad-words")
const {generateMessage,generateLocationMessage} = require('./utils/messages')

const app = express();
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname,'../public');
app.use(express.static(publicDirectoryPath))

io.on('connection',(socket)=>{
    console.log("socket connected")
    

    socket.on('join',({username, room},callback)=>{

        socket.join(room) //can only be called from server
        socket.emit('message',generateMessage('Welcome'))
        socket.broadcast.to(room).emit('message',generateMessage(`${username} has joined!`))

    })

    socket.on('sendMessage',(msg,callback)=>{
        const filter = new Filter()
        if(filter.isProfane(msg))
            return callback('Profaning is not allowed here!')
        io.emit('message',generateMessage(msg))
        callback()
    })

    socket.on('sendLocation',({latitude,longitude}, callback)=>{
        io.emit('locationMessage',generateLocationMessage(`https://google.com/maps?q=${latitude},${longitude}`))
        callback()
    })
    socket.on('disconnect',()=>{
        io.emit('message',generateMessage('A user has left!'))
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