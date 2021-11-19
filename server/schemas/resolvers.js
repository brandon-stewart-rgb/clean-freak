const User = require('../models/User');
const {signToken} = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express')
const {validateLoginInput} = require('../utils/validators')
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

//////ALL STRIPE DATA//////
//const express = require("express")
//const app = express()
//app.use(express.json())
//app.use(express.static("public"))
//require("dotenv").config()



const resolvers = {
    Query: {
        me: async(parent, args, context)=>{
            if(context.user){
                const userData =  await User.findOne({}).select('-__v-password');
                return userData;
            }

            throw new AuthenticationError('You Are Not Logged In!')
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
          
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const correctPw = await user.isCorrectPassword(password);
          
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const token = signToken(user);
            return { token, user };
          },
        addUser: async (_, args) => {
            console.log(args);
            const user = await User.create(args);
            const token = signToken(user);

            return {token, user};
        },
        addOrder: async (parent, { orderData}, context) => {
            if (context.user) {
                //const order = await Order.create({ ...args, username: context.user.username });

                const updatedUserOrder = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { Order: orderData } },
                    { new: true }
                );

                return updatedUserOrder;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

    }
}

module.exports = resolvers;