import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment, IPost } from "../../types/DBmodels";
import { IPostsState } from "../../types/posts";
import { createComment, createPost, deletePost, fetchPosts } from "../thunks/posts";



const initialState: IPostsState = {
    posts: [],
    isLoading: true,
    error: "",
    isAdding: false,
    isDeleting: false
}


const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: {
        [createPost.fulfilled.type]: (state, action: PayloadAction<IPost>) => {
            state.posts = [action.payload, ...state.posts]
            state.error = ""
        },
        [createPost.pending.type]: (state, action) => {

        },
        [createPost.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
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
            state.isAdding = false
        },
        [createComment.pending.type]: (state, action) => {
            state.isAdding = true
        },
        [createComment.rejected.type]: (state, action) => {
            state.isAdding = false
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
    }
})


export default postsSlice.reducer;