import { createAsyncThunk } from "@reduxjs/toolkit";
import { FollowService } from "../../API/FollowService";
import { UsersService } from "../../API/UsersService";
import { UserProfilePrefixes } from "../../types/userProfile";


export const fetchProfile = createAsyncThunk(UserProfilePrefixes.fetch_profile,
    async (id: string, thunk) => {
        try {
            const data = await UsersService.fetchOne(id)
            return data

        } catch (err) {
            return thunk.rejectWithValue(err)
        }
    })


export const follow = createAsyncThunk(UserProfilePrefixes.follow,
    async (id: string, thunk) => {
        try {
            const data = await FollowService.follow(id)
            return data

        } catch (err) {
            return thunk.rejectWithValue(err)
        }
    })


export const unfollow = createAsyncThunk(UserProfilePrefixes.unfollow,
    async (id: string, thunk) => {
        try {
            const data = await FollowService.unfollow(id)
            return data

        } catch (err) {
            return thunk.rejectWithValue(err)
        }
    })