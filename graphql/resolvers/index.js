const postsResolvers = require('./post');
const usersResolvers = require('./user')
const profileResolvers = require('./profile')
const commentResolvers = require('./comments')


module.exports = {
    Post: {
        likeCount(parent) {
            console.log(parent);
            return parent.likes.length;
        },
        commentCount: (parent) => parent.comments.length
    },
    Query: {
        ...postsResolvers.Query,
        ...profileResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...postsResolvers.Mutation,
        ...commentResolvers.Mutation,
        ...profileResolvers.Mutation
    },
    Subscription: {
        ...postsResolvers.Subscription
    }
}