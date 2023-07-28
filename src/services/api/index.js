import axios from 'axios'
export const instance = axios.create({
    baseUrl : import.meta.env.VITE_APP_BASE_URL
})