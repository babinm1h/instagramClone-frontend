import { IPost, IUser } from "./DBmodels";


export interface IUserState {
    isAuth: boolean
    user: IUser | null
    isProcessing: boolean
    signinError: string
    signupError: string
    posts: IPost[]
    recomendations: IUser[]
    isLoading: boolean
}


export enum UsersThunkPrefixes {
    signup = "user/signup",
    signin = "user/signin",
    check = "user/check",
    logout = "user/logout",
    fetch_recomendations = "user/fetch_recomendations"
}
