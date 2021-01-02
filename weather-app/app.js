const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const input = process.argv[2];
if(!input){
    return console.log('Please enter a location');
}


geocode(input,(error,{latitude,longitude,location})=>{
    if(error){
        return console.log(error);
    }
    console.log(latitude);
    forecast(latitude, longitude, (error, forecastData) => {

        if(error){
            return console.log(error);
        }
        console.log(location);
        console.log(forecastData)
      });
    
});

