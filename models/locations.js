const mongoose = require('mongoose');
let Schema = mongoose.Schema;


let locationSchema = new Schema({
    id:{
        type: Number,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    longitude:{
        type:Number,
        required:true
    },
    latitude: {
        type:Number,
        required:true
    },
    altitude:{
        type:Number,
        required:true
    }

});

let Location = mongoose.model('Location',locationSchema);

module.exports = {Location};