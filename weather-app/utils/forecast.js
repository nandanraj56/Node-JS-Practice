const request = require('request');

const forecast = (latitude,longitude, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=12992ffc526f209ee4207732da9fdb7c&query='+latitude+','+  longitude;
    request({url, json:true},(error, {body}={})=>{
    
        if(error){
            callback('Unable to connect to weather service!',undefined);
            
        }else if(body.error){
            callback('Unable to find location!',undefined);
    
        }
        else{
            const {current:data} = body;
            callback(undefined,data.weather_descriptions[0]+'. it is currently '+data.temperature+' degress out. It feels like '+data.feelslike+' degress out!');
        }
      
        
    });

};

module.exports = forecast;