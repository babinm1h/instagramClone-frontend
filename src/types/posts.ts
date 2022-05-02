import { IPost } from "./DBmodels";


export interface IPostsState {
    isLoading: boolean
    posts: IPost[]
    error: string
    isAdding: boolean
    isDeleting: boolean
}


export enum PostsThunkPrefixes {
    fetch_posts = "posts/fetch_posts",
    create_post = "posts/create_post",
    create_comment = "posts/create_comment",
    delete_comment = "posts/delete_comment",
    delete_post = "posts/delete_post"
}