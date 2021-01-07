const path = require('path')
const { response } = require('express');
const express = require('express');
const app = express();

//Setup path for express config
const publicStaticPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../views');

console.log(publicStaticPath)
//Setup handle bar and views location
app.set('view engine','hbs');
app.set('views',viewsPath);

//Setup Static directory to serve
app.use(express.static(publicStaticPath));

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather Home',
        name:'Nandan Raj'
    });
});

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        name:'Nandan Raj'
    });
});

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        message:'This is a examplet help text'
    });
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