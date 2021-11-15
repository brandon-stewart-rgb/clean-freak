const db = require('./connection');
const { User, Product, Category } = require('../models');
db.once('open', async () => {
  //await Category.deleteMany();
  const categories = await Category.insertMany([
    { name: 'Bronze' },
    { name: 'Silver' },
    { name: 'Gold' }
  ]); //ON USER.JS TRY THE CATERGORIES LIKE SO TYPE STRING / REQ TRUE / UN FALSE / HAVE PRICE  / 
  console.log('categories seeded');
 // await Product.deleteMany();
  const products = await Product.insertMany([
    {
      name: 'Ryan Tompson',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      category: categories[0]._id,
      price: 49.99,
      quantity: 500 //PROD JS USE THESE . WHAT THEY HAVE IN STRUCTOR SHOULD LOOK LIKE PROD PRICE:CATEFORIES [0].PRICE
    },
    {
        name: 'Romina Hadid',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        category: categories[0]._id,
        price: 49.99,
        quantity: 500
      },
      {
        name: 'Alexa Smith',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        category: categories[0]._id,
        price: 49.99,
        quantity: 500
      },

      {
        name: 'Jenna Kardi',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        category: categories[0]._id,
        price: 49.99,
        quantity: 500
      },
    {
      name: 'Ryan Tompson',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      price: 59.99,
      quantity: 20
    },
    {
      name: 'Romina Hadid',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      price: 59.99,
      quantity: 50
    },
    {
      name: 'Alexa Smith',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      price: 59.99,
      quantity: 100
    },
    {
      name: 'Jenna Kardi',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      price: 59.99,
      quantity: 100
    },
    {
      name: 'Ryan Tompson',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'camera.jpg',
      price: 69.99,
      quantity: 30
    },
    {
      name: 'Romina Hadid',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'tablet.jpg',
      price: 69.99, 
      quantity: 30
    },
    {
      name: 'Alexa Smith',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'tablet.jpg',
      price: 69.99, 
      quantity: 30
    },
    {
      name: 'Jenna Kardi',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'tablet.jpg',
      price: 69.99, 
      quantity: 30
    },
  
  ]);
  console.log('products seeded');
 await User.deleteMany();
  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });
  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });
  console.log('users seeded');
  process.exit();
});
