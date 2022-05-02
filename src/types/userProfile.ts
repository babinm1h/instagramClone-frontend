import { IUser } from "./DBmodels";



export interface IUserProfileState {
    isLoading: boolean
    isFollowing: boolean
    user: IUser | null
}


export enum UserProfilePrefixes {
    fetch_profile = 'userProfile/fetch_profile',
    follow = "userProfile/follow",
    unfollow = "userProfile/unfollow",
}

export interface IFollowResponse {
    followerId: string
    user: IUser
}