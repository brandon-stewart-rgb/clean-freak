const { Schema } = require('mongoose');

const productSchema = require('./Product')

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
<<<<<<< Updated upstream
  products: [productSchema]
=======
  price: {
    type: Int
  },
  name: {
    type: String
  },
  username: [User]
  // products: [productSchema]
>>>>>>> Stashed changes
});



module.exports = orderSchema;
