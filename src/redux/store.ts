import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slices/postsSlice";
import userProfileSlice from "./slices/userProfileSlice";
import userSlice from "./slices/userSlice";



const rootReducer = combineReducers({
    posts: postsSlice,
    user: userSlice,
    userProfile: userProfileSlice
})


export const store = configureStore({
    reducer: rootReducer
})


export type RootState = ReturnType<typeof rootReducer>