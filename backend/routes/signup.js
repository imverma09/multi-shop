const route = require('express').Router()
const users = require('../model/signup')
const bcrypt = require('bcrypt')   
const nodemailer =  require('nodemailer')
const jwt =  require('jsonwebtoken'); 
const secret = '^#9590fjKwi39o04if,el349$%&@*($)@jwe34im4!8^^%289'
route.post('/sign', async (req, res) => {
    const bodyData = req.body;
    try {
        const salt = await bcrypt.genSalt()
        const newPassword = await bcrypt.hash(bodyData.password, salt)
        bodyData.password =newPassword ; 
        const transport  =  nodemailer.createTransport({
            host : 'smtp.gmail.com',
            port :587 ,
            secure : false ,
            auth : {
                user : "imverma45@gmail.com",
                pass : "arfcpoqgldrxmxeb"
            }
        })
        const newUser  =  await users.create(bodyData)
        const token =  await jwt.sign({_id : newUser._id} , secret , {expiresIn : '1h'})
        transport.sendMail({
            from :"123452@gmail.com" ,
            to : bodyData.email,
            subject : "verification",
            html : `
            <h2> click here to verify <a href="http://localhost:3000/verification?token=${token}">verify</a> </h2>
            `
        })
        res.status(200).send("okk")
    }
    catch (error) {
     console.log(error.messages)
    }
})
route.get("/email-verification" , async(req, res )=>{
  const token = req.query.token 
  try {
   const user = await jwt.verify(token , secret)
   const find = await users.findOne({_id : user._id})
   if (find){
    await users.updateOne({_id : find._id} , {$set : {isConfirm : true }})
    res.cookie('jwt' , token,{
        httpOnly :true ,
        maxAge  : 259200000,
    })
  }
  res.status(200).send("ok")
  } catch (error) {
    console.log(error)
  }
})
route.post("/login-user", async(req,res) =>{
   const bodyData = req.body
   try {
        const user = await users.findOne({email : bodyData.email})
        if (!user.isConfirm) {
          return res.status(401).json({msg : "confirm your email Address"})
        }
        if (!user) {
           return res.status(401).json({msg : "user not found "})
        }
        const exist = await bcrypt.compare(bodyData.password , user.password)
        if (!exist) {
           return res.status(401).json({msg : "user not found "})
         }
        const token = await jwt.sign({_id : user._id} , secret)
         res.cookie('jwt', token ,{
            httpOnly : true , 
            maxAge : 12750000
         })
         res.status(201).json({msg : "welcome..!"})
   } catch (error) {
    console.log(error.messages)
    res.status(501).json({msg : "Something Wrong plz Try Again"})
   }
})

module.exports = route; 