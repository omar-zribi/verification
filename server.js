const express=require('express');
const app=express();
require('dotenv').config({path: "./config/.env"})
const PORT=process.env.PORT||6000;
const connectDb=require('./config/connectDb');
connectDb();
// const Profile=require('./model/Profile.js')
// app.use(express.json())
app.listen(PORT,(error)=>error?
console.log(`impossible to connect to the server error=${error.message}`)
:console.log(`server is connected successfully, link=http://localhost:${PORT}/`));
