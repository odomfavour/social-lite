const { AuthenticationError, UserInputError } = require('apollo-server');
const { findByIdAndUpdate } = require('../../models/Profile');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const checkAuth = require('../../utils/check-auth');

module.exports = {
    Query: {
        async getProfiles(){
            try {
                const profiles = await Profile.find();
                return profiles;
            } catch(err) {
                throw new Error(err);

            }
        },
        async getUsers(){
            try {
                const users = await User.find().populate('users', ['name', 'avatar']);
                return users;
            } catch(err) {
                throw new Error(err);

            }
        },
        async getProfile(_, {userId}){
            try {
                const profile = await Profile.findOne({user: userId}).populate('users', ['name', 'avatar'])
                console.log(profile)
                if(profile) {
                    return profile;
                } else {
                    throw new Error('Profile not found')
                }
                
            } catch(err) {
                throw new Error(err);

            }
        },
    },
    Mutation: {
        async createProfile(_, {userId, address, city, state_or_province, marital_status, country, bio, languages, social}) {
            console.log('here')
            //build profile object
            const profileFields = {};
            profileFields.user  = userId
            if(address) profileFields.address = address
            if(city) profileFields.city = city
            if(state_or_province) profileFields.state_or_province = state_or_province
            if(marital_status) profileFields.marital_status = marital_status
            if(bio) profileFields.bio = bio
            if(languages) profileFields.languages = languages.split(',').map(language => language.trim())
            if(country) profileFields.country = country
            if(social) profileFields.social = social
            console.log(profileFields)

            try{
            let profile = await Profile.findOne({user: userId})
            console.log(profile)
            if(profile) {
                profile = await Profile.findOneAndUpdate({user:userId}, {$set: profileFields}, {new: true})
                // await profile.save();
                return profile;
            }

            // create
            profile = new Profile(profileFields) 
            await profile.save()
            }catch(err) {
                console.log(err)
                
            }
        }
    }
}