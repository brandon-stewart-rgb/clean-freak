const { Schema } = require('mongoose');

// const productSchema = require('./Product')

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  // products: [productSchema]
});



module.exports = orderSchema;
