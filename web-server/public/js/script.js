//const e = require("express");

console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form');

console.log(weatherForm)
weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log('Gaya yaha');
    const inputAddress = document.getElementsByName('address')[0].value;
    console.log(inputAddress)

    fetch('http://localhost:3000/weather?address='+inputAddress).then((response)=>{
    response.json().then((data)=>{
        //console.log(data);
        if(data.error){
            console.log(data.error);
        }
        else{
            console.log(data.forecast)
            console.log(data.location)
            console.log(data.address)
        }
    })

})
});


