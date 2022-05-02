import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment, IPost } from "../../types/DBmodels";
import { ILikeResponse, IPostsState } from "../../types/posts";
import { createComment, createPost, deletePost, fetchPosts, likePost, unlikePost } from "../thunks/posts";



const initialState: IPostsState = {
    posts: [],
    isLoading: true,
    error: "",
    isAddingPost: false,
    isDeleting: false,
    isLiking: false,
    isAddingComm: false
}


const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: {
        [createPost.fulfilled.type]: (state, action: PayloadAction<IPost>) => {
            state.posts = [action.payload, ...state.posts]
            state.error = ""
            state.isAddingPost = false
        },
        [createPost.pending.type]: (state, action) => {
            state.isAddingPost = true
        },
        [createPost.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.isAddingPost = false
        },


        [fetchPosts.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload
            state.isLoading = false
        },
        [fetchPosts.pending.type]: (state, action) => {
            state.isLoading = true
        },
        [fetchPosts.rejected.type]: (state, action) => {
            state.isLoading = false
        },


        [createComment.fulfilled.type]: (state, action: PayloadAction<IComment>) => {
            const post = state.posts.find(p => p._id === action.payload.postId)
            if (post) post.comments.push(action.payload)
            state.isAddingComm = false
        },
        [createComment.pending.type]: (state, action) => {
            state.isAddingComm = true
        },
        [createComment.rejected.type]: (state, action) => {
            state.isAddingComm = false
        },


        [deletePost.fulfilled.type]: (state, action: PayloadAction<IPost>) => {
            state.posts = state.posts.filter(p => p._id !== action.payload._id)
            state.isDeleting = false
        },
        [deletePost.pending.type]: (state, action) => {
            state.isDeleting = true
        },
        [deletePost.rejected.type]: (state, action) => {
            state.isDeleting = false
        },


        [likePost.fulfilled.type]: (state, action: PayloadAction<ILikeResponse>) => {
            const post = state.posts.find(p => p._id === action.payload.post._id)
            if (post) {
                post.likes.push(action.payload.userId)
            }
            state.isLiking = false
        },
        [likePost.pending.type]: (state, action) => {
            state.isLiking = true
        },
        [likePost.rejected.type]: (state, action) => {
            state.isLiking = false
        },


        [unlikePost.fulfilled.type]: (state, action: PayloadAction<ILikeResponse>) => {
            const post = state.posts.find(p => p._id === action.payload.post._id)
            if (post) {
                post.likes = post.likes.filter(id => id !== action.payload.userId)
            }
            state.isLiking = false
        },
        [unlikePost.pending.type]: (state, action) => {
            state.isLiking = true
        },
        [unlikePost.rejected.type]: (state, action) => {
            state.isLiking = false
        },
    }
})


export default postsSlice.reducer;