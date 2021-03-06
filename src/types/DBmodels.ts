
export interface IPost {
    user: IUser
    likes: string[]
    comments: IComment[]
    title: string
    img: string
    createdAt: string
    _id: string
}


export interface IUser {
    username: string
    email: string
    password: string
    img: string

    posts: IPost[]
    likes: string[]
    followers: string[]
    follows: string[]
    _id: string
}


export interface IComment {
    postId: string
    user: IUser
    text: string
    createdAt: string
    _id: string
}


