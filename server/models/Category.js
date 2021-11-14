const mongoose = require('mongoose');
const { Schema } = mongoose;


//const  = require('./Product');
const category = require('./Category');
const categorySchema = new Schema({
    Bronze: {
        type: String,
        required: true,
        unique: false,
        price: 49.99
    },
    Silver: {
        type: String,
        required: true,
        unique: false,
        price: 59.99
    },
    Gold: {
        type: String,
        required: true,
        unique: true,
        price: 69.99
    },
    Category: [category.schema]
});

//PROD PRICE:CATEFORIES [0].PRICE VINNIE I WANT TO USE THIS CODE HERE Because the people dont' have a price they have like a hio


// we want user to see the service they want and choose the best package for them. 
categorySchema.get('select', async function (next) {
    
})




module.exports = product;
