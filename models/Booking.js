const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    bookingฺBegin: {
        type: Date,
        required: [true, 'Please add a booking begin date']
    },
    bookingEnd: {
        type: Date,
        required: [true, 'Please add a booking end date']
    },
    roomType: {
        type: string,
        required: [true, 'Please select room type']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    hotel: {
        type: mongoose.Schema.ObjectId,
        ref: 'Hotel',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

module.exports = mongoose.model('Booking', BookingSchema);