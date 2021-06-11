//user schema

const { model, Schema } = require('mongoose');

const profileSchema = new Schema({
    user: {
        // relations even though mongodb is relationless
        type: Schema.Types.ObjectId,
        //references the user table
        ref: 'users'
    },
    username: String,
    dob: Date,
    languages: String,
    address: String,
    city: String,
    state_or_province: String,
    country: String,
    marital_status: String,
    religion: String,
    name_next_of_kin: String,
    bio: String,
    social: {
        youtube: {
            type: String
        },
        facebook: {
            type: String
        },
        twitter: {
            type: String
        }
    },
    createdAt: String
});

module.exports = model('Profile', profileSchema);