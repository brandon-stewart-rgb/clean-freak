// const orderResolvers = require('./order');
const usersResolvers = require('./users');

module.exports = {
     Query: {
    //     ...orderResolvers.Query
            ...usersResolvers.Query
     },
    Mutation:{
        ...usersResolvers.Mutation
    }
}