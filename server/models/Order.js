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
<<<<<<< HEAD
  //  Invalid value for schema path `username`, got value "undefined"
  //  username: [userSchema]
=======
  username: [userSchema]
>>>>>>> develop
  // products: [productSchema]
});

//const Order = mongoose.model('Order', orderSchema);
//
module.exports = orderSchema;
