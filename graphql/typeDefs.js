const { gql } = require('apollo-server')

module.exports = gql`
    type Post {
        id: ID!
        body: String!
        createdAt: String!
        username: String!
        email: String!
        comments: [Comment]!
        likes: [Like]!
        likeCount: Int!
        commentCount: Int!
    }
    type Comment {
        id: ID!
        createdAt: String!
        username: String!
        body: String!
        email: String!
    }

    type Like {
        id: ID!
        createdAt: String!
        username: String!
        email: String!
    }
    type User {
        id: ID!
        email: String!
        firstName: String!
        lastName: String!
        gender: String!
        avatar: String!
        token: String!
        username:String!
        createdAt: String!
        profile: Profile
    }
    type Profile {
        id: ID!
        dob: Date
        languages: [String]!
        address: String
        city: String
        state_or_province: String
        country: String
        marital_status: String
        religion: String
        name_next_of_kin: String
        bio: String
        social: [String],
        createdAt: String
    }
    scalar Date

    input RegisterInput {
        firstName: String!
        lastName: String!,
        gender: String!
        username: String!
        password: String!
        confirmPassword: String!
        email:String!
        phone: String
    }

    # input profileInput {
    #     bio: String
    #     address: String,
    #     country: String
    #     marital_status: String
    #     languages: [String]
    #     state_or_province: String
    #     city:String
    #     social: String
    # }
    type Query {
        getPosts: [Post]!
        getPost(postId: ID!): Post
        getProfile(userId: ID!): Profile
        getProfiles: [Profile]!
        getUsers: [User]!
    }
    type Mutation {
        register(registerInput: RegisterInput): User!
        login(email: String!, password: String!): User!
        createPost(body: String!): Post!
        deletePost(postId: ID!): String!
        createComment(postId: String!, body: String!): Post!
        deleteComment(postId: ID!, commentId: ID!): Post!
        likePost(postId: ID!): Post!
        createProfile(userId: ID!,
        bio: String
        address: String,
        country: String
        marital_status: String
        languages: [String]
        state_or_province: String
        city:String
        social: String): Profile
    }
    type Subscription{
        newPost: Post!
    }

`;