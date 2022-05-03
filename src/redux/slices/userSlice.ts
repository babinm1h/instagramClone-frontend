import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/DBmodels";
import { IUpdateProfileResponse, IUserState } from "../../types/user";
import { checkAuth, fetchRecomendations, logout, signIn, signUp, updateProfile } from "../thunks/user";



const initialState: IUserState = {
    user: null,
    isAuth: false,
    isProcessing: false,
    posts: [],
    signinError: '',
    isLoading: true,
    signupError: '',
    recomendations: [],
    updateError: "",
    isUpdating: false
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [signUp.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.isAuth = true
            state.user = action.payload
            state.isProcessing = false
            state.posts = action.payload.posts

            state.signinError = ""
            state.signupError = ""
        },
        [signUp.pending.type]: (state, action) => {
            state.isProcessing = true
        },
        [signUp.rejected.type]: (state, action: PayloadAction<string>) => {
            state.signupError = action.payload
            state.isProcessing = false
        },


        [signIn.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.isAuth = true
            state.user = action.payload
            state.isProcessing = false
            state.posts = action.payload.posts

            state.signinError = ""
            state.signupError = ""
        },
        [signIn.pending.type]: (state, action) => {
            state.isProcessing = true
        },
        [signIn.rejected.type]: (state, action: PayloadAction<string>) => {
            state.signinError = "Wrong email or password"
            state.isProcessing = false
        },


        [checkAuth.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.isAuth = true
            state.isLoading = false
        },
        [checkAuth.pending.type]: (state, action) => {
            state.isLoading = true
        },
        [checkAuth.rejected.type]: (state, action) => {
            state.isLoading = false
        },


        [logout.fulfilled.type]: (state, action) => {
            state.isAuth = false
            state.user = null
            state.posts = []
            state.signinError = ""
            state.signupError = ''
        },


        [fetchRecomendations.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.recomendations = action.payload
        },

        [updateProfile.fulfilled.type]: (state, action: PayloadAction<IUpdateProfileResponse>) => {
            if (state.user) {
                state.user.email = action.payload.user.email
                state.user.username = action.payload.user.username
                if (action.payload.img) {
                    state.user.img = action.payload.img
                }
            }
            state.isUpdating = false
            state.updateError = ""
        },
        [updateProfile.pending.type]: (state, action) => {
            state.isUpdating = true
        },
        [updateProfile.rejected.type]: (state, action: PayloadAction<string>) => {
            state.updateError = action.payload
            state.isUpdating = false
        },
    }
})


export default userSlice.reducer