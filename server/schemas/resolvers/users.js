const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../../config');

module.exports = {
    Mutation: {
        async register(_, 
            { registerInput:
                 {username, email, password} 
            }, context, info){
            // Validate user data
            // make sure user doesn't exist
            // hash password create auth token
            password = await bcrypt.hash(password, 12);

            const newUser = new User({
                email,
                username,
                password
                // new date to ISOString to convert date to a readable string
            })
            const res = await newUser.save();

            const token = jwt.sign({
                id: res.id,
                email: res.email,
                username: res.username,
            }, SECRET_KEY, {expiresIn: '1h'});

            return {
                ...res.doc,
                id: res._id,
                token
            }
        }
    }
}