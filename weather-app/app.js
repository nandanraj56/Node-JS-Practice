const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


geocode('New Jersy',(error,response)=>{
    console.log(error);
    console.log(response);
    
});

forecast(-75.7088, 44.145, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  });