const User = require('../../models/User');
const {signToken} = require('../../utils/auth');
const { AuthenticationError } = require('apollo-server-express')
const {validateLoginInput} = require('../../utils/validators')



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
        }
    }
}

module.exports = resolvers;