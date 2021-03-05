const socket = io()

socket.on('message',(msg)=>{
    console.log(msg)
    
})
document.querySelector("#chatform").addEventListener('submit',(e)=>{
    e.preventDefault()
    //e-> event varibale, target -> selected form, elements-> childelements of form, textmsg-> child element id
    const message = e.target.elements.textmsg.value
    socket.emit('sendMessage',message,(error)=>{
        if(error){
           return console.log(error)
        }
        console.log('Message delivered Succesfully!')
    })
})

document.querySelector('#send-location').addEventListener('click',()=>{
    if(!navigator.geolocation){
        alert('Your browser does not support geolocation!')
    }
    navigator.geolocation.getCurrentPosition((location)=>{

        const {latitude, longitude} = location.coords
        socket.emit('sendLocation',{
            latitude, longitude
        },()=>{
            console.log('Location  Shared!')
        })
    })
})

