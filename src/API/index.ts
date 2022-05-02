import axios from "axios";



const $instance = axios.create({
    baseURL: "http://localhost:7777/api",
    withCredentials: true
})


export { $instance }