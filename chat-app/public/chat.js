const socket = io()

socket.on('message',(msg)=>{
    console.log(msg)
    
})
document.querySelector("#chatform").addEventListener('submit',(e)=>{
    e.preventDefault()
    //e-> event varibale, target -> selected form, elements-> select childelements, textmsg-> child element id
    const message = e.target.elements.textmsg.value
    socket.emit('sendMessage',message)
})

