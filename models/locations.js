const mongoose = require('mongoose');
let Schema = mongoose.Schema;

//Location model will be used to store Large Areas, Small Points and even the treasrue hunt locations.
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