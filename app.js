const express=require('express');
const chalk=require('chalk');
const path=require('path');
const hbs=require('hbs');
const getLocation=require('./getLocation1');
const { json } = require('express');

const app=express();
const port=3000;
const data=[{name:"nancy",age:21},{name:"prince",age:19}];

const publicPath=path.join(__dirname,'/public');
app.set('view engine','hbs');
hbs.registerPartials(path.join(__dirname,'/partials'));

//console.log(publicPath);
app.use(express.static(publicPath));

app.get('/',(req,res)=>
{
    res.send("<h1>welcome !!<h1>");
});

app.get('/about',(req,res)=>
{
    res.render('about',{
        title:"about page",
        heading:"this is my about page",
        name:"nancy kapadia",
        date:"28-7-2020"
    });
})

app.get('/weather',(req,res)=>
{
    if(! req.query.address)
    {
        return res.status(400).send(JSON.stringify({error:"400-bad request"}));
    }
    getLocation(req.query.address,(result)=>
    {
        return res.send(JSON.stringify(result));
    });
    
    // res.status(200).send(JSON.stringify({address:req.query.address}));
   // res.status(200).send(JSON.stringify(data));
})

app.get("*",(req,res)=>
{
    res.render("error",{
        msg:"404-page not found"
    })
})

app.listen(port,()=>
{
    console.log(chalk.green.inverse(`server starting at ${port}`));
})