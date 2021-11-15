const mongoose = require('mongoose');
const { Schema } = mongoose;


const productSchema = new Schema({

    color:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }, 
    housekeeper:{
        type: String,
        required: true
    }
});

module.exports = productSchema;
