const express=require('express');
const app=express();
const port=8000;



const db=require('./config/mongoose');

const session=require('express-session');
const passport=require('passport');

const passportJWT= require('./config/passport-jwt');

const MongoStore=require('connect-mongo');



app.use(express.urlencoded({extended:false}));

app.listen(port,(err)=>{
    if(err){
        console.log(`Error in running the server :${err}`);
        return;
    }
    console.log(`Server Successfully running on port : ${port}`);
}) 