const request = require('request');
const url = 'http://api.weatherstack.com/current?access_key=12992ffc526f209ee4207732da9fdb7c&query=37.8267,-122.42';

/*request({url:url, json:true},(error, response)=>{
    
    if(error){
        console.log('Unable to connect to weather service!');
        
    }else if(response.body.error){
        console.log('Unbale to find location!');

    }
    else{
        const data = response.body.current;
        console.log(data.weather_descriptions[0]+'. it is currently '+data.temperature+' degress out. It feels like '+data.feelslike+' degress out!');
    }
    //console.log(data)
    //console.log(response.body.current)
    
});*/

const mapurl = 'http://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmFuZGFucmFqNTYiLCJhIjoiY2tqYWF2aWM2MjcxajJzbnF2bXU0c2ZmaCJ9.0Co3EsHOltSdKXEFaY4Nsg&limit=1';

request({url:mapurl,json:true},(error,response)=>{
    if(error){
        console.log('Unable to connect to location service');
    }else if(response.body.features.length <=0){
        console.log('Invalid location');
    }else{
        const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
    }

    //console.log(response.body.features[0].center);
    



});