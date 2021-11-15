const User = require('../../models/User');
const {signToken} = require('../../utils/auth');
const { AuthenticationError } = require('apollo-server-express')
const {validateLoginInput} = require('../../utils/validators')



const resolvers = {
    Query: {
        me: async(parent, args, context)=>{
            if(context.user){
                const userData =  await User.findOne({_id: context.user_id}).select('-__v-password');
                return userData;
            }

            throw new AuthenticationError('You Are Not Logged In!')
        }
    },
    Mutation: {
        login: async (_, {username, password }) => {
            // check for errors in username and password
            const {errors, valid} = validateLoginInput(username, password);
            if(!valid){
                throw new Error('err', {errors})
            }
            // find a user from the database
            const user = User.findOne({username})

            if(!user){
                errors.general = 'User not found';
                throw new Error('Wrong username', {errors});
            }
            const match = await user.isCorrectPassword(password);
            if(!match){
                errors.general = 'Wrong password';
                throw new Error('Wrong password', {errors});
            }
            const token = signToken(user);

            return {token, user};
        },
        addUser: async (_, args) => {
            console.log(args);
            const user = await User.create(args);
            const token = signToken(user);

            return {token, user};
        }
    }
}

module.exports = resolvers;