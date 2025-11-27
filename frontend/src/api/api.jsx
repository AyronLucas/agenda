import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
})

axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if(token){
            consfig.headers.Autorization = `Bearer ${token}`
        }
        return config
    },
    (e) => {
        return Promise.reject(e)
    }
)

export default api;