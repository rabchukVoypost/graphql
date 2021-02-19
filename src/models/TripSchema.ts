export {};
const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
    from: {
        type: String,
        trim: true
    },
    to: {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model('Trip', TripSchema)