import { $instance } from ".";
import { IUser } from "../types/DBmodels";
import { IUpdateProfileResponse } from "../types/user";



export class UsersService {

    static async signUp(email: string, password: string, username: string): Promise<IUser> {
        const { data } = await $instance.post("/users/signup", { email, password, username })
        return data
    }

    static async signIn(email: string, password: string): Promise<IUser> {
        const { data } = await $instance.post("/users/signin", { email, password })
        return data
    }

    static async check(): Promise<IUser> {
        const { data } = await $instance.get("/users/check")
        return data
    }

    static async logout() {
        const { data } = await $instance.get("/users/logout")
        return data
    }


    static async fetchOne(id: string): Promise<IUser> {
        const { data } = await $instance.get(`/users/${id}`)
        return data
    }


    static async fetchRecomendations(): Promise<IUser> {
        const { data } = await $instance.get(`/users/user/recomendations`)
        return data
    }


    static async updateProfile(fd: FormData): Promise<IUpdateProfileResponse> {
        const { data } = await $instance.post(`/profile/update`, fd)
        return data
    }
}