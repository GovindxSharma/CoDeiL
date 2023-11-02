const express =require('express');
const cookieParser=require('cookie-parser')
const port= 8000;
const app= express();
const db =require('./config/mongoose')
const expressLayouts= require('express-ejs-layouts');
app.use(express.urlencoded());
app.use(express.static('./assets'))
app.use(cookieParser());


app.use(expressLayouts);

app.set('layout extractStyles',true);


app.use('/',require('./routes'))



app.set('view engine','ejs')
app.set('views','./views')


app.listen(port,function(err){
    if(err){
        console.log(`Error:${err}`);
        return;
    }
    console.log(`The server is up and running at port: ${port}`)

})
