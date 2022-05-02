import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/DBmodels";
import { IFollowResponse, IUserProfileState } from "../../types/userProfile";
import { fetchProfile, follow, unfollow } from "../thunks/userProfile";


const initialState: IUserProfileState = {
    isFollowing: false,
    isLoading: true,
    user: null
}


const userProfileSlice = createSlice({
    name: "userProfile",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProfile.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.isLoading = false
        },
        [fetchProfile.pending.type]: (state, action) => {
            state.isLoading = true
        },
        [fetchProfile.rejected.type]: (state, action) => {
            state.isLoading = false
        },


        [follow.fulfilled.type]: (state, action: PayloadAction<IFollowResponse>) => {
            if (state.user) {
                state.user.followers.push(action.payload.followerId)
            }
            state.isFollowing = false
        },

        [follow.pending.type]: (state, action) => {
            state.isFollowing = true
        },

        [follow.rejected.type]: (state, action) => {
            state.isFollowing = false
        },


        [unfollow.fulfilled.type]: (state, action: PayloadAction<IFollowResponse>) => {
            if (state.user) {
                state.user.followers = state.user.followers.filter(f => f !== action.payload.followerId)
            }
            state.isFollowing = false
        },

        [unfollow.pending.type]: (state, action) => {
            state.isFollowing = true
        },

        [unfollow.rejected.type]: (state, action) => {
            state.isFollowing = false
        },
    }
})


export default userProfileSlice.reducer;