const socket = io()
//Elements
let $messageForm = document.querySelector("#message-form")
let $messageFormInput = $messageForm.querySelector('input')
let $messageFormButton = $messageForm.querySelector('button')
let $sendLocationButton = document.querySelector('#send-location')
let $messages = document.querySelector('#messages')

//Templates
let messageTemplate = document.querySelector('#message-template').innerHTML
let locationMessageTemplate = document.querySelector('#location-message-template').innerHTML

//Query Selector- Options
const {username, room} = Qs.parse(location.search, {ignoreQueryPrefix:true})

socket.on('message',(msgObj)=>{
    console.log(msgObj)
    const html = Mustache.render(messageTemplate,{
        message:msgObj.message,
        createdAt:moment(msgObj.createdAt).format('h:mm a')
    })
    $messages.insertAdjacentHTML("beforeend",html)
    
})

socket.on('locationMessage',({url,createdAt})=>{
    //console.log(url)
    const html = Mustache.render(locationMessageTemplate,{
        url,
        createdAt: moment(createdAt).format('h:mm a')
    })
    $messages.insertAdjacentHTML('beforeend',html)
})


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

socket.emit('join',{username, room},(error)=>{

})

