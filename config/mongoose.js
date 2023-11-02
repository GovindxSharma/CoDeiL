const mongoose= require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/codeil_development')
const db=mongoose.connection;
db.on('error',console.error.bind(console,'Error connecting to the MongoDB'));

db.once('open',function(){
    console.log('Connected to the dataBase')
})
module.exports=db;