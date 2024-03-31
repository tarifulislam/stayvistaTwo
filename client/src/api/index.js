import axios from "axios";

const axiosSrcure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true ,
})

export default axiosSrcure;