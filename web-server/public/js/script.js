//const e = require("express");

console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form');

console.log(weatherForm)
weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    document.querySelector('#pOne').textContent = "Loading...";
    document.querySelector('#pTwo').textContent = "";
    console.log('Gaya yaha');
    const inputAddress = document.getElementsByName('address')[0].value;
    console.log(inputAddress)

    fetch('http://localhost:3000/weather?address='+inputAddress).then((response)=>{
    response.json().then((data)=>{
        //console.log(data);
        if(data.error){
            console.log(data.error);
            document.querySelector('#pOne').textContent = data.error;
            document.querySelector('#pTwo').textContent = "";
        }
        else{
            document.querySelector('#pOne').textContent = data.forecast;
            document.querySelector('#pTwo').textContent = data.location;
            
            //console.log(data.forecast)
            //console.log(data.location)
            //console.log(data.address)
        }
    })

})
});


