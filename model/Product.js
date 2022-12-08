const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    id :{
        type: String,
        required: true
    },
    name :{
        type: String,
        required: true
    },
    description :{
        type: String,
        required: true
    },
    unitPrice :{
        type: Number,
        required: true
    },
    category :{
        type: String,
        required: true
    },
    thumbnail:{
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Product', ProductSchema);