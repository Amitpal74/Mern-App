var jwt = require('jsonwebtoken');
const Person = require('../models/Person');
require('../utils/common');

const auth = async (req,res,next) => {
    try{
    const token = req.header('Authorization');
    const decode = await jwt.verify(token,sessionKey);
    const user = await Person.findOne({_id:decode._id});
    if(!user){
        res.status(401).send({error:"unauthorized user"})
        
    }
    req.person = user;
    req.token = token;
    next();
    }catch(error){
        res.status(401).send({error:"unauthorized user"})
    }
}

module.exports = auth;