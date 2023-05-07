import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
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
        types: Array,
        default: []
    }
    
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);

export default Post;