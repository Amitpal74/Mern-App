const express = require('express');
const Person = require('../models/Person');
const Role = require('../models/Role');
const auth = require('../middlewares/authorization');
const bcrypt = require('bcryptjs');
const router = new express.Router();

module.exports.login = async function(req,res) {
    console.log(req.body);
    try{
        console.log(1);
   const person =  await Person.findByEmailAndPassword(req.body.email,req.body.password);
    const token = await person.getAuthTokens();
    res.send(200,{person,token});
    }catch(error){
        res.status(400).send(error);
    }
   
};

module.exports.logout =  async function(req,res){
    try{
     console.log(req.person);
    req.person.tokens =  await req.person.tokens.filter(token => {
        console.log(token);
        return token.token != req.token; 
    })  
     console.log(req.person.tokens);
    await  req.person.save();
    res.status(200).send({msg:"logout successfully"});
    }catch(error){
        console.log(error);
        res.status(400).send(error);
    }
   
}
