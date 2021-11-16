const User = require('../../models/User');
const {signToken} = require('../../utils/auth');
const {validateLoginInput} = require('../../utils/validators')



module.exports = {
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