import { createAsyncThunk } from "@reduxjs/toolkit";
import { UsersService } from "../../API/UsersService";
import { UsersThunkPrefixes } from "../../types/users";


export const signUp = createAsyncThunk(UsersThunkPrefixes.signup,
    async (payload: { email: string, password: string, username: string }, thunk) => {
        try {
            const { email, password, username } = payload
            const data = await UsersService.signUp(email, password, username)

            return data

        } catch (err: any) {
            return thunk.rejectWithValue(err.response.data.message)
        }
    })


export const signIn = createAsyncThunk(UsersThunkPrefixes.signin,
    async (payload: { email: string, password: string }, thunk) => {
        try {
            const { email, password } = payload
            const data = await UsersService.signIn(email, password)

            return data

        } catch (err: any) {
            return thunk.rejectWithValue(err.response.data.message)
        }
    })


export const checkAuth = createAsyncThunk(UsersThunkPrefixes.check,
    async (_, thunk) => {
        try {
            const data = await UsersService.check()
            return data

        } catch (err: any) {
            return thunk.rejectWithValue(err.response.data.message)
        }
    })


export const logout = createAsyncThunk(UsersThunkPrefixes.logout,
    async (_, thunk) => {
        try {
            const data = await UsersService.logout()
            return data

        } catch (err: any) {
            return thunk.rejectWithValue(err.response.data.message)
        }
    })