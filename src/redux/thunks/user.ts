import { createAsyncThunk } from "@reduxjs/toolkit";
import { UsersService } from "../../API/UsersService";
import { UsersThunkPrefixes } from "../../types/user";


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


export const fetchRecomendations = createAsyncThunk(UsersThunkPrefixes.fetch_recomendations,
    async (_, thunk) => {
        try {
            const data = await UsersService.fetchRecomendations()
            return data

        } catch (err: any) {
            return thunk.rejectWithValue(err.response.data.message)
        }
    })


export const updateProfile = createAsyncThunk(UsersThunkPrefixes.update_profile,
    async (formData: FormData, thunk) => {
        try {
            const data = await UsersService.updateProfile(formData)
            return data

        } catch (err: any) {
            return thunk.rejectWithValue(err.response.data.message)
        }
    })


export const searchUsers = createAsyncThunk(UsersThunkPrefixes.update_profile,
    async (search: string, thunk) => {
        try {
            const data = await UsersService.searchUsers(search)
            return data

        } catch (err: any) {
            return thunk.rejectWithValue(err.response.data.message)
        }
    })