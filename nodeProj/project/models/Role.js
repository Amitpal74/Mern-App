const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const role = new Schema({
    name: {
           type:String   
       }
});

const Role = mongoose.model('Role',role);

module.exports = Role