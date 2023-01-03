const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const vehiOwnerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    vehiType: {
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

exports.VehiOwner = mongoose.model('VehiOwner', vehiOwnerSchema);