import { $instance } from ".";
import { IPost } from "../types/DBmodels";


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
}