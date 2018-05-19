const mongoose = require('mongoose');
let Schema = mongoose.Schema;


let userSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    googleId: {
        type:String,
        required:true
    },
    credits: {
       type:Number
    }
});

let User = mongoose.model('User',userSchema);

module.exports = {User};