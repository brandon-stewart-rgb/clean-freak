const { Schema } = require('mongoose');

// const productSchema = require('./Product')

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  price: {
    type: Int
  },
  name: {
    type: String
  },
  username: [User]
  // products: [productSchema]
});



module.exports = orderSchema;
