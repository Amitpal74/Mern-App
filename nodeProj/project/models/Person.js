const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('../utils/common');

const user = new Schema({
    name: {
           type:String   
       },
   age: {
       type:Number,
       validate(value){
           if(value <= 0){
               throw new Error("age should be greater then zero");
           }
       }
   },
   dob:{
    type:Date
   },
   email: {
    type:String,
    required : true    
}, 
password: {
    type:String,
    required : true    
}, 
tokens:[{
    token :{
        type:String,
        required : true    
    }
   }]
});
  
   user.statics.findByEmailAndPassword =  async function(email,pwd) {
       let User = this;
     const user = await User.findOne({email});
        if(!user){
           throw new Error("User invalid")
            
        }
        const isMatch =  await bcrypt.compare(pwd, user.password);
            if(!isMatch){
                throw new Error("Password invalid")
            }
            return user;
    }

/* user.statics.findByEmailAndPassword =  function(email,pwd) {
    let User = this;
  return User.findOne({email}).then( u => {
     if(!u){
        return Promise.reject();
         
     }
     return new Promise((resolve,reject) =>{
      bcrypt.compare(pwd, u.password,(err,res) => {
         if(res){
             resolve(u)
         }else{
             reject();
         } 
      });
     })
 })
} */

user.methods.getAuthTokens = async function() {
    alert(sessionKey);
    const user = this;
    const token = await jwt.sign({ _id: user._id.toString() }, sessionKey);
    user.tokens = user.tokens.concat({token});
    user.save();
    return token;
}

const User = mongoose.model('User',user);

module.exports = User