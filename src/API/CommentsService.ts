import { $instance } from ".";



export class CommentsService {

    static async createComment(postId: string, text: string) {
        const { data } = await $instance.post("/comments", { postId, text })
        return data
    }


    static async deleteComment(postId: string, commentId: string) {
        const { data } = await $instance.post(`/comments?${commentId}`, { postId })
        return data
    }

}