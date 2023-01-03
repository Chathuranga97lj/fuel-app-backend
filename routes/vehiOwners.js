const {VehiOwner} = require('../models/vehiOwner');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.post('/register', async (req, res) => {
    let vehiOwner = new VehiOwner({
        name: req.body.name,
        vehiType: req.body.vehiType,
        userName: req.body.userName,
        passwordHash: bcrypt.hashSync(req.body.password, 10)
    });

    vehiOwner = await vehiOwner.save();

    if(!vehiOwner){
        return res.status(404).send('The Vehical Owner cannot be created!');
    }

    res.send(vehiOwner);
})

module.exports = router;