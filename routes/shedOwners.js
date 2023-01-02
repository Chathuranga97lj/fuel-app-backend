const {ShedOwner} = require('../models/shedOwner');
const express = require('express');
const router = express.Router();

router.post('/shedowner', async (req, res) => {
    let shedOwner = new ShedOwner({
        name: req.body.name,
        shedName: req.body.shedName,
        userName: req.body.userName,
        password: req.body.password
    });

    shedOwner = await shedOwner.save();

    if(!shedOwner){
        return res.status(404).send('The Shed Owner cannot be created!');
    }

    res.send(shedOwner);
})

module.exports = router;