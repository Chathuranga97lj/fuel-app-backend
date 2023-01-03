const {Feed} = require('../models/feed');
const express = require('express');
const router = express.Router();

router.post('/setfeed', async (req, res) => {
    let feed = new Feed({
        shedName: req.body.shedName,
        type: req.body.type,
        arrivalTime: req.body.arrivalTime,
        departTime: req.body.departTime,
        waitingTime: req.body.waitingTime,
    });

    feed = await feed.save();

    if(!feed){
        return res.status(404).send('The feed cannot be created!');
    }

    res.send(feed);
})

module.exports = router;