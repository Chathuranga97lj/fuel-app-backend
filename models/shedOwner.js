const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const shedOwnerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        requred: true
    },
    password: {
        type: String,
        required: true
    }
});

exports.ShedOwner = mongoose.model('ShedOwner', shedOwnerSchema);