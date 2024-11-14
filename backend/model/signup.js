
const mongoose =  require('mongoose')
const schema =  mongoose.Schema({
    name : {
        type : String ,
        required : true  
    },
    email : {
        type : String , 
        required : true , 
        unique  : true 
    },
    password : {
        type : String , 
        required : true
    },
    isConfirm : {
        type : Boolean , 
        default : false ,
    }
})
module.exports = mongoose.model('user' , schema)