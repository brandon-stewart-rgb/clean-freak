const { AuthenticationError } = require('apollo-server-express');
const { Order } = require('../../models');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

//////ALL STRIPE DATA//////
//const express = require("express")
//const app = express()
//app.use(express.json())
//app.use(express.static("public"))
//require("dotenv").config()

//what we want to sell
// const storeItems = new Map([
//     [1, { priceInCents: 5000, name: "Cleaning package 1" }],
//     [2, { priceInCents: 10000, name: "Cleaning package 2" }],
//     [3, { priceInCents: 15000, name: "Cleaning package 3" }],
//     [4, { priceInCents: 20000, name: "Cleaning package 4" }],
// ])

//module.exports = resolvers;

const resolvers = {
    Query: {
        Order: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Thought.find(params).sort({ createdAt: -1 });
        },
    },
    Mutation: {
        addOrder: async (parent, args, context) => {
            if (context.user) {
                const order = await Order.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { Order: order._id } },
                    { new: true }
                );

                return order;
            }
            throw new AuthenticationError('You need to be logged in!');
        }

    }

}
module.exports = resolvers