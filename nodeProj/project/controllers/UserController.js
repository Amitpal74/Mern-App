const express = require('express');
const Person = require('../models/Person');
const Role = require('../models/Role');
const auth = require('../middlewares/authorization');
const bcrypt = require('bcryptjs');
const router = new express.Router();

module.exports.getUserList = async function(req,res){
    await Person.find().then((persons) => {
        console.log(persons)
        res.status(200).send(persons);
    }).catch((error) => {
       res.status(400).send(error);
    })

   
}

module.exports.getUserByEmail = async function(req,res){
    console.log(req.body.email);
   await Person.findOne({email:req.body.email}).then((person) => {
       console.log(person)
       res.status(200).send(person);
   }).catch((error) => {
      res.status(400).send(error);
   }) 
}


module.exports.saveUser = async function(req,res){
    console.log("in save");
    const role = await Role.findOne({name:"USER"}).then((role) => {
    console.log(role)
    return role
    }).catch((error) => {
    throw new Error("exception in fetching role");
    })
     const person = new Person(req.body);
     person.password = bcrypt.hashSync(person.password, 8);
     person.role = role;
     console.log(person.password);
     try{
    await person.save();
    const token = await person.getAuthTokens();
    
    res.status(200).send({person,token});

    }catch(error){
        res.status(400).send(error);
    }
}

module.exports.updateRole = async function(req,res){
    console.log("in updateRole");
    const person = await Person.findOne({email:req.body.email}).then((person) => {
        console.log(person)
        return person;
    }).catch((error) => {
       res.status(400).send(error);
    })

    const role = await Role.findOne({name:req.body.role}).then((role) => {
    console.log(role)
    return role
    }).catch((error) => {
    throw new Error("exception in fetching role");
    })

     person.role = role;
     try{
    await person.save();
    
    res.status(200).send(person);

    }catch(error){
        res.status(400).send(error);
    }
}



