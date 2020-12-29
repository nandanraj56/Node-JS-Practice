const request = require('request');
const url = 'http://api.weatherstack.com/current?access_key=12992ffc526f209ee4207732da9fdb7c&query=37.8267,-122.42';

request({url:url},(error, response)=>{
    const data = JSON.parse(response.body);
    //console.log(data)
    console.log(data.current)
});