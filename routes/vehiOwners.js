const {VehiOwner} = require('../models/vehiOwner');
const express = require('express');
const router = express.Router();

router.post('/register', async (req, res) => {
    let vehiOwner = new VehiOwner({
        name: req.body.name,
        vehiType: req.body.vehiType,
        userName: req.body.userName,
        password: req.body.password
    });

    vehiOwner = await vehiOwner.save();

    if(!vehiOwner){
        return res.status(404).send('The Vehical Owner cannot be created!');
    }

    res.send(vehiOwner);
})

module.exports = router;