const path = require('path')
const { response } = require('express');
const express = require('express');
const app = express();

const publicStaticPath = path.join(__dirname,'../public');

app.use(express.static(publicStaticPath));

app.get('/weather',(req,res)=>{
    const obj = {
        location: 'Bettiah',
        forecast: 'Its 25 degrees out'
    }
    res.send(obj);
})

app.listen(3000,()=>{
    console.log('Listening');
});