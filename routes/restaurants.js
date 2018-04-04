const express = require('express');
const router = express.Router();
const Restaurant = require('./../models/restaurants');

router.post('/add',(req,res)=>{
    let id = req.body.id;
    let name = req.body.name;
    let type = req.body.type;
    let lng = req.body.longitude;
    let lat = req.body.latitude;
    let alt = req.body.altitude;
    let img = req.body.img;
    if (id&&name&&type&&lng&&lat&&alt){
        new Restaurant ({
            id,
            name,
            type,
            longitude:lng,
            latitude:lng,
            altitude:alt,
            img

        }).save().then((createdRestaurant)=>{
            res.send(createdRestaurant);
        });
    }
    else {
        res.send("Invalid data.")
    }
});

router.get ('/search/:name',(req,res)=>{
    let name = req.params.name;
    Restaurant.findOne ({name}).then((currentRestaurant)=>{
        if (currentRestaurant) {
            res.send(currentRestaurant);
        }
        else {
            res.send("Not found");
        }
    });
});

