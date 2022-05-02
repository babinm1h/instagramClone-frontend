import { createAsyncThunk } from "@reduxjs/toolkit";
import { CommentsService } from "../../API/CommentsService";
import { PostsService } from "../../API/PostsService";
import { PostsThunkPrefixes } from "../../types/posts";



export const createPost = createAsyncThunk(PostsThunkPrefixes.create_post,
    async (fd: FormData, thunk) => {
        try {
            const data = await PostsService.createPost(fd)
            return data

        } catch (err: any) {
            return thunk.rejectWithValue(err.response.data.message)
        }
    })


export const fetchPosts = createAsyncThunk(PostsThunkPrefixes.fetch_posts,
    async (_, thunk) => {
        try {
            const data = await PostsService.fetchPosts()
            return data

        } catch (err: any) {
            return thunk.rejectWithValue(err.response.data.message)
        }
    })



export const createComment = createAsyncThunk(PostsThunkPrefixes.create_comment,
    async (payload: { text: string, postId: string }, thunk) => {
        try {
            const data = await CommentsService.createComment(payload.postId, payload.text)
            return data

        } catch (err: any) {
            return thunk.rejectWithValue(err.response.data.message)
        }
    })


export const deleteComment = createAsyncThunk(PostsThunkPrefixes.delete_comment,
    async (payload: { postId: string, commentId: string }, thunk) => {
        try {
            const data = await CommentsService.deleteComment(payload.postId, payload.commentId)
            return data

        } catch (err: any) {
            return thunk.rejectWithValue(err.response.data.message)
        }
    })


export const deletePost = createAsyncThunk(PostsThunkPrefixes.delete_post,
    async (id: string, thunk) => {
        try {
            const data = await PostsService.deletePost(id)
            return data

        } catch (err: any) {
            return thunk.rejectWithValue(err.response.data.message)
        }
    })