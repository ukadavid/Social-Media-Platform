import  { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: 'light',
    user: null,
    token: null,
    post: [],
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setFriends: (state, action) => {
            if (state.user){
            state.user.friends = action.payload.friends;
        } else {
            console.log('user friends does not exist')
        }
        },
        setPosts: (state, action) => {
            state.post = action.payload.post;
        },
        setPost: (state, action) => {
            const updatedPost = state.post.map((post) => {
                if (post._id === action.payload._id) {
                    return action.payload.post;
                }
                return post;
            })
            state.post = updatedPost;
    },
}

})

export const { setMode, setLogin, setLogout, setFriends, setPost, setPosts } = authSlice.actions;

export default authSlice.reducer;