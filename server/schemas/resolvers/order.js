const { AuthenticationError } = require('apollo-server-express');
const { Order } = require('../../models');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
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