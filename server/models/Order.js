const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = require('./User');


const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  price: {
    type: Number
  },
  name: {
    type: String
  },
  username: [userSchema]
  // products: [productSchema]
});

//const Order = mongoose.model('Order', orderSchema);
//
module.exports = orderSchema;
