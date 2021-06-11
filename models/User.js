//user schema

const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
    gender: String,
    avatar: String,
    createdAt: String,
    profile: {
        // relations even though mongodb is relationless
        type: Schema.Types.ObjectId,
        //references the user table
        ref: 'profiles'
    }
});

module.exports = model('User', userSchema);