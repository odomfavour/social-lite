const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
//specific errors from appollo
const { UserInputError} = require('apollo-server');

const { validateRegisterInput, validateLoginInput } = require('../../utils/validators');
const { SECRET_KEY} = require('../../config');
const User = require('../../models/User');

function generateToken(user) {
    return  jwt.sign({
        id: user.id,
        email: user.email,
        username: user.username
    }, SECRET_KEY, { expiresIn: '1h'});

}

module.exports = {
    Mutation: {
        async login(_, {email, password}) {
            const {errors, valid} = validateLoginInput(email, password);

            const user =  await User.findOne({email});

            if(!user){
                errors.general = 'User not found';
                throw new UserInputError('User not found', {
                    errors
                });
            }

            const match = await bcrypt.compare(password, user.password);
            if(!match) {
                errors.general = 'Wrong credentails';
                
                // errors.general = errors;
                console.log(errors)
                throw new UserInputError('Wrong credentails', {
                    errors
                });
            }   

            //token
            const token = generateToken(user)
            return {
                ...user._doc,
                id: user._id,
                token
            }
        },
        // pattern _, args, context, info
        async register(_, 
            { registerInput : { username, email, password, confirmPassword, firstName, lastName, gender, phone }
            }) {
                
            // todo validtae user data
            const { valid, errors } = validateRegisterInput(username, email, password, confirmPassword, firstName, lastName, gender, phone);
            if(!valid) {
                throw new UserInputError('Errors', { errors });
            }
            // make sure user doesnt already exist
            const user = await User.findOne({ email});
            if(user) {
                throw new UserInputError('Username is taken', {
                    errors: {
                        email: 'This email is taken'
                    }
                })
            }
            // hash password ands create auth token

            password = await bcrypt.hash(password, 12);

            // form user objject
            const newUser = new User({
                email,
                username,
                password,
                firstName,
                lastName,
                gender,
                createdAt: new Date().toISOString()

            });
            const res = await newUser.save();

            //token
            const token = generateToken(res)
            return {
                ...res._doc,
                id: res._id,
                token
            }
        }
    }
}