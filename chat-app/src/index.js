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

//server (emit) -> client(receive) - countUpdated
//client (emit) -> server(receive) - inrement
let count = 0;
io.on('connection',(socket)=>{
    console.log("socket connected")
    socket.emit('incrementUpdated',count)
    socket.on('increment',()=>{
        count++;
        //This socket.emit is gonna emit this event to only a particular socket, which triggred this connection
        //socket.emit('incrementUpdated',count)

        //This io.emit is gonna emit this event to all of the available connected clients, kind of broadcast
        io.emit('incrementUpdated',count)
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