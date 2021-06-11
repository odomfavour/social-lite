const { UserInputError, AuthenticationError } = require('apollo-server');

const checkAuth = require('../../utils/check-auth');
const Post = require('../../models/Post');


module.exports = {
    Mutation: {
        createComment: async (_, {postId, body}, context) => {
            const {username, email} = checkAuth(context);
            if(body.trim() === "") {
                throw new UserInputError('Empty comment', {
                    errors: {
                        body: 'Comment body must not be empty'
                    }
                })
            }

            const post = await Post.findById(postId);
            console.log(post)

            if(post) {
                post.comments.unshift({
                    body,
                    username,
                    email,
                    createdAt: new Date().toISOString()
                })
                console.log(post)
                await post.save();
                return post;
            }else throw new UserInputError('post not found');
        },
        async deleteComment(_, {postId, commentId }, context) {
            const { username, email } = checkAuth(context);

            const post = await Post.findById(postId);

            if(post) {
                const commentIndex = post.comments.findIndex(c => c.id === commentId);

                if(post.comments[commentIndex].email === email) {
                    post.comments.splice(commentIndex, 1);
                    await post.save();
                    return post;
                }else {
                    throw new AuthenticationError('Action not allowed')
                }
            } else {
                throw new UserInputError('Post not found')
            }


        },
        async likePost(_, { postId }, context) {
            const {username, email} = checkAuth(context);

            const post = await Post.findById(postId);

            if(post) {
                if(post.likes.find(like => like.email === email)) {
                    // Post already liked unlike it
                    post.likes = post.likes.filter(like => like.email !== email)
                   
                }else {
                    //not liked, like post
                    post.likes.push({
                        username,
                        email,
                        createdAt: new Date().toISOString()
                    })
                }
                await post.save();
                return post;
            } else throw new UserInputError('Post not found')
        }
    }
}