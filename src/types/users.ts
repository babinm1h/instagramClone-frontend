import { IPost, IUser } from "./DBmodels";


export interface IUserState {
    isAuth: boolean
    user: IUser | null
    isProcessing: boolean
    signinError: string
    signupError: string
    posts: IPost[]
    isLoading: boolean
}


export enum UsersThunkPrefixes {
    signup = "user/signup",
    signin = "user/signin",
    check = "user/check",
    logout = "user/logout",
}