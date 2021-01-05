const { response } = require('express');
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello Express');
});
app.get('/help',(req,res)=>{
    res.send('Help Center');

});
app.get('/about',(req,res)=>{
    res.send('<h3>About page</h3>');
});
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