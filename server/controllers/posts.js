import Post from '../models/Post.js';
import User from '../models/User.js';

// Create Routes

export const createPost = async (req, res) => {
    try {
        const { userId, description, picturePath} = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            lastname: user.lastname,
            location: user.location,
            firstname: user.firstname,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: []
        })

        await newPost.save();

        const post = await Post.find();

        res.status(200).json(post);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

// Read Routes
export const getFeedPosts = async (req, res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const getUserPosts = async (req, res) => {
    try {
        const { userId } = req.params;
        const post = await Post.find({ userId });
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// Update Routes

export const likePost = async (req, res) => {
    try {
        const {id} = req.params;
        const {userId} = req.body;
        const post = await Post.findById(id);
        const isLiked = post.likes.get(userId);

        if(isLiked){
            post.likes.delete(userId);
        } else{
            post.likes.set(userId, true);
        }

        const updatedPost = await Post.findByIdAndUpdate(id, post, {new: true});
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}