const { Schema } = require('mongoose');

// const productSchema = require('./Product')

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
<<<<<<< HEAD
=======
  price: {
    type: Int
  },
  name: {
    type: String
  },
  username: [User]
>>>>>>> feature/resolve-seeds
  // products: [productSchema]
});



module.exports = orderSchema;
