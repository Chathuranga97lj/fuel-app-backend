const {ShedOwner} = require('../models/shedOwner');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.post('/register', async (req, res) => {
    let shedOwner = new ShedOwner({
        name: req.body.name,
        userName: req.body.userName,
        passwordHash: bcrypt.hashSync(req.body.password, 10)
    });

    shedOwner = await shedOwner.save();

    if(!shedOwner){
        return res.status(404).send('The Shed Owner cannot be created!');
    }

    res.send(shedOwner);
})

module.exports = router;