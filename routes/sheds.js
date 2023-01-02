const {Shed} = require('../models/shed');
const express = require('express');
const router = express.Router();

router.post('/register', async (req, res) => {
    let shed = new Shed({
        owner: req.body.owner,
        shedName: req.body.shedName,
        availability: req.body.availability
    });

    shed = await shed.save();

    if(!shed){
        return res.status(404).send('The Shed cannot be created!');
    }

    res.send(shed);
})

module.exports = router;