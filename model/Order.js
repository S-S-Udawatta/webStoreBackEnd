const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    customer :{
        type: Object,
        required: true
    },
    items :{
        type: Array,
        required: true
    },
    totalPrice :{
        type: Number,
        required: true
    },
    address :{
        type: String,
        required: true
    },
    contact :{
        type: String,
        required: true
    },
    date :{
        type: Date,
        required: true
    }
});
module.exports = mongoose.model('Order', OrderSchema);