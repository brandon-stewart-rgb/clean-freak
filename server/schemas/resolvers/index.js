const orderResolvers = require('./order');
const usersResolvers = require('./users');

module.exports = {
    Query: {
        ...orderResolvers.Query
    },
    Mutation:{
        ...usersResolvers.Mutation
    }
}