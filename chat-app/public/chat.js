const socket = io()

socket.on('message',(msg)=>{
    console.log(msg)
    
})
//Elements
let $messageForm = document.querySelector("#message-form")
let $messageFormInput = $messageForm.querySelector('input')
let $messageFormButton = $messageForm.querySelector('button')
let $sendLocationButton = document.querySelector('#send-location')
$messageForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    $messageForm.setAttribute('disabled','disabled')

    //e-> event varibale, target -> selected form, elements-> childelements of form, textmsg-> child element id
    const message = e.target.elements.textmsg.value
    
    socket.emit('sendMessage',message,(error)=>{
        $messageForm.removeAttribute('disabled')
        $messageFormInput.value = ''
        $messageFormInput.focus()
        if(error){
           return console.log(error)
        }
        console.log('Message delivered Succesfully!')
    })
})

$sendLocationButton.addEventListener('click',()=>{
    if(!navigator.geolocation){
        alert('Your browser does not support geolocation!')
    }
    $sendLocationButton.setAttribute('disabled','disabled')
    navigator.geolocation.getCurrentPosition((location)=>{
        const {latitude, longitude} = location.coords
        socket.emit('sendLocation',{
            latitude, longitude
        },()=>{
            $sendLocationButton.removeAttribute('disabled')
            console.log('Location  Shared!')
        })
    })
})

