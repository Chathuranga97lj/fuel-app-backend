const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const shedSchema = mongoose.Schema({
    owner: {
        type: String,
        required: true
    },
    shedName: {
        type: String,
        required: true
    },
    availability:{
        type: Boolean,
        default: false,
    }
})

exports.Shed = mongoose.model('Shed', shedSchema);