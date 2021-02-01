const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    name: String,
    password: String,
    address: {
        city: String,
        location: String,
    },
    phone: String,
    business: {
        name: String,
        social: [],
        category: [String],
        address: {
            city: String,
            location: String
        }
    },
    is_admin: { type: Boolean, default: false },
    roles: { type: [String], default: ["user"] }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) { delete ret._id }
});

const model = mongoose.model('User', schema);
module.exports = model;