const http = require('http');
const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/bettiah.json?access_token=pk.eyJ1IjoibmFuZGFucmFqNTYiLCJhIjoiY2tqYWF2aWM2MjcxajJzbnF2bXU0c2ZmaCJ9.0Co3EsHOltSdKXEFaY4Nsg&limit=1';

const request = http.request(url,(response)=>{
    let data = '';

    response.on('data',(chunk)=>{
        data = data+ chunk.toString();
    });
    response.on('end',()=>{
        console.log(JSON.parse(data));
    });

    

});
request.on('error',(error)=>{
    console.log('Error occured')
})

request.end()