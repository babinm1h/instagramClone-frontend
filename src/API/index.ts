import axios from "axios";



const $instance = axios.create({
    baseURL: "https://insta-cl0ne.herokuapp.com/api",
    withCredentials: true
})


export { $instance }