import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    fistname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    location: {
        type: String,
    },
    picturePath: {
        type: String,
    },
    userPicturePath: String,
    likes: {
        type: Map,
        of: Boolean,
    },
    comments: {
        type: Array,
        default: []
    }
    
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);

export default Post;