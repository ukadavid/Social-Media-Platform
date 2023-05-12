import mongoose, { Schema } from "mongoose";


const UserSchema = new Schema({
    firstname: {
        type: String,
        min: 2,
        max: 50
    },
    lastname: {
        type: String,
        min: 2,
        max: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50
    },
    password: {
        type: String,
        required: true,
        max: 5
    },
    picturePath: {
        type: String,
        default: ""
    },
    friends: {
        type: Array,
        default: []

    },
    location: {
        type: String
    },
    occupation: {
        type: String
    },
    viewedProfile: {
        type: Number
    },
    impression: {
        type: Number
    }
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

export default User;