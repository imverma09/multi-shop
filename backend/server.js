const express = require('express') ; 
const app =express() 
const mongoose =  require('mongoose');
// const cookiesParser =  require('cookies-parser');
const cors = require('cors') ; 
const signup =  require('./routes/signup')
app.use(cors({
    origin : 'http://localhost:3000'
}))
app.use(express.json())
app.use('/', signup)
const port = 4000 ; 
 mongoose.connect('mongodb://localhost:27017/multiShop')
 .then(()=>{
     app.listen(port , ()=>{
         console.log("Server Start " + port); 
     })
 })

 .catch((error)=>{
    console.log(error)
 })
