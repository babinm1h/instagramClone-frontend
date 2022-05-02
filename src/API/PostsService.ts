import { $instance } from ".";
import { IPost } from "../types/DBmodels";
import { ILikeResponse } from "../types/posts";


export class PostsService {

    static async createPost(formData: FormData): Promise<IPost> {
        const { data } = await $instance.post("/posts/", formData)
        return data
    }


    static async fetchPosts(): Promise<IPost[]> {
        const { data } = await $instance.get("/posts/")
        return data
    }

    static async deletePost(id: string): Promise<IPost> {
        const { data } = await $instance.delete(`/posts/${id}`)
        return data
    }


    static async like(id: string): Promise<ILikeResponse> {
        const { data } = await $instance.post(`/posts/like/${id}`)
        return data
    }

    static async unlike(id: string): Promise<ILikeResponse> {
        const { data } = await $instance.delete(`/posts/unlike/${id}`)
        return data
    }
}