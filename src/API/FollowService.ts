import { $instance } from ".";
import { IFollowResponse } from "../types/userProfile";



export class FollowService {

    static async follow(id: string): Promise<IFollowResponse> {
        const { data } = await $instance.post(`/follow/${id}`)
        return data
    }

    static async unfollow(id: string): Promise<IFollowResponse> {
        const { data } = await $instance.delete(`/follow/${id}`)
        return data
    }

}