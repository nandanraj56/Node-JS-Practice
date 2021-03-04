const socket = io()
socket.on('incrementUpdated',(count)=>{
    console.log("Increment updated to "+count)
})
window.document.querySelector("#incrementor").addEventListener('click',()=>{
    socket.emit('increment')
})
console.log(io)
