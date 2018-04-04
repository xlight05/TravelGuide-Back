const express = require('express');
const router = express.Router();
const Location = require('./../models/locations');

router.post('/add',(req,res)=>{
    let id = req.body.id;
    let name = req.body.name;
    let description = req.body.description;
    let lng = req.body.longitude;
    let lat = req.body.latitude;
    let alt = req.body.altitude;
    if (id&&name&&description&&lng&&lat&&alt){
        new Location ({
            id,
            name,
            description,
            longitude:lng,
            latitude:lng,
            altitude:alt

        }).save().then((createdLocation)=>{
            res.send(createdLocation);
        });
    }
    else {
        res.send("Invalid data.")
    }
});

router.get ('/search/:name',(req,res)=>{
    let name = req.params.name;
    Location.findOne ({name}).then((currentLocation)=>{
        if (currentLocation) {
            res.send(currentLocation);
        }
        else {
            res.send("Not found");
        }
    });
});

