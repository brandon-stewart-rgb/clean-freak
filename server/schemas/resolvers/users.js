const User = require('../../models/User');
const {signToken} = require('../../utils/auth');
const {validateLoginInput} = require('../../utils/validators')



module.exports = {
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
        register: async (_, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return {token, user};
        }
    }
}