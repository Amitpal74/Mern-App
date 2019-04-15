const express = require('express');
const Person = require('../models/Person');
const auth = require('../middlewares/authorization');
const bcrypt = require('bcryptjs');
const router = new express.Router();

router.get('/get',auth, (req,res) => {
    Person.find().then((persons) => {
        console.log(persons)
        res.status(200).send(persons);
    }).catch((error) => {
       res.status(400).send(error);
    })

   
})

router.post('/getOne',auth, (req,res) => {
    console.log(req.body.email);
    Person.findOne({email:req.body.email}).then((person) => {
       console.log(person)
       res.status(200).send(person);
   }).catch((error) => {
      res.status(400).send(error);
   }) 
})



router.post('/login', async (req,res) => {
    console.log(req.body);
    try{
        console.log(1);
   const person =  await Person.findByEmailAndPassword(req.body.email,req.body.password);
    const token = await person.getAuthTokens();
    res.send(200,{person,token});
    }catch(error){
        res.status(400).send(error);
    }
   
})

router.post('/logout',auth, async (req,res) => {
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
   
})

router.post('/save',async (req,res) => {
    console.log("in save");
     const person = new Person(req.body);
     person.password = bcrypt.hashSync(person.password, 8);
     console.log(person.password);
     try{
    await person.save();
    const token = await person.getAuthTokens();
    
    res.status(200).send({person,token});

    }catch(error){
        res.status(400).send(error);
    }
    
})



module.exports = router 