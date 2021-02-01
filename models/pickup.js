const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    products: [{
        name: String,
        category: String,
        weight: String,
    }],
    total_weight: Number,
    products_total_price: Number,
    has_discount: { type: Boolean, default: false },
    discount: { type: Number, default: 0 },
    user: {},
    reciever: {
        name: String,
        phone: String,
        address: {
            city: String,
            location: String,
        }
    },
    pickup_point: String,
    delivery: {
        status: { type: String, default: "Pending" },
        type: { type: String }
    },
    payment: {
        amount: Number,
        status: { type: String, default: "Pending" },
        transaction_id: String,
        transaction_number: String,
    }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) { delete ret._id }
});
module.exports = mongoose.model('Pickup', schema);
