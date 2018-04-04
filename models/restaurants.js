const mongoose = require('mongoose');
let Schema = mongoose.Schema;

//restaurants Model. It contains id, name,type , lng,lat,alt and img of the restaurant.
let restaurantSchema = new Schema({
    id:{
        type: Number,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    type:{
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
    },
    img: {
        type:String,
        required:false
    }

});

let Restaurant = mongoose.model('Restaurant',restaurantSchema);

module.exports = {Restaurant};