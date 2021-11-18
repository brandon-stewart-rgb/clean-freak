<<<<<<< HEAD
const { Schema } = require('mongoose');
const userSchema = require('./User')
// const productSchema = require('./Product')
=======
const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = require('./User');

>>>>>>> feature/new-order

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

const Order = mongoose.model('Order', orderSchema);
//
module.exports = Order;
