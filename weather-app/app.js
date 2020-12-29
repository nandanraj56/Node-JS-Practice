const request = require('request');
const url = 'http://api.weatherstack.com/current?access_key=12992ffc526f209ee4207732da9fdb7c&query=37.8267,-122.42';

request({url:url, json:true},(error, response)=>{
    const data = response.body.current;
    //console.log(data)
    //console.log(response.body.current)
    console.log(data.weather_descriptions[0]+'. it is currently '+data.temperature+' degress out. It feels like '+data.feelslike+' degress out!');
});