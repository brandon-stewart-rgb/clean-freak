const { AuthenticationError } = require('apollo-server-express');
const { Order } = require('../../models');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
//const express = require("express")
//const app = express()
//app.use(express.json())
//app.use(express.static("public"))
//require("dotenv").config()


const resolvers = {
  
}

module.exports = resolvers;
