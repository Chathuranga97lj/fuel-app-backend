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
    passwordHash: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
});

exports.ShedOwner = mongoose.model('ShedOwner', shedOwnerSchema);