const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Create Schema
const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    handle: {
        type: String,
        required: true,
        max: 30
    },
    company: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    social: {
        youtube: {
            type: String
        },
        facebook: {
            type: String
        },
        twitter: {
            type: String
        },
        instagram: {
            type: String
        },
        linkedIn: {
            type: String
        }
    }
});

module.exports = Profile = mongoose.model('Profile', ProfileSchema);