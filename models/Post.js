//post schema

const { model, Schema } = require('mongoose');

const postSchema = new Schema({
    body: String,
    username: String,
    email: String,
    createdAt: String,
    comments: [
        {
            body: String,
            createdAt: String,
            username: String,
            email: String
        }
    ],
    likes: [
        {
            username: String,
            email: String,
            createdAt: String
        }
    ],
    user: {
        // relations even though mongodb is relationless
        type: Schema.Types.ObjectId,
        //references the user table
        ref: 'users'
    }
});

module.exports = model('Post', postSchema);