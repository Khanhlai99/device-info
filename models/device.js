const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    // description: {
    //     type: String,
    //     required: false,
    // }
});

module.exports = mongoose.model('Device', deviceSchema);