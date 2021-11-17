const { Schema } = require('mongoose');
const userSchema = require('./User')
// const productSchema = require('./Product')

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
  username: [User]
=======
  //  Invalid value for schema path `username`, got value "undefined"
   username: [userSchema]
>>>>>>> feature/login
  // products: [productSchema]
});



module.exports = orderSchema;
