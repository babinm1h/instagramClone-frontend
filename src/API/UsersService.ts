import { $instance } from ".";
import { IUser } from "../types/DBmodels";



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

}