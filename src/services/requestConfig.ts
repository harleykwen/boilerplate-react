import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const requestConfig = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL,
})

// Add a request interceptor
requestConfig.interceptors.request.use(function (config: InternalAxiosRequestConfig<any>) {
    // Do something before request is sent
    if (config.withCredentials) {
        config.headers.Authorization = '' // Put token here
    }
    return config
}, function (error) {
    // Do something with request error
    return Promise.reject(error)
})

// Add a response interceptor
requestConfig.interceptors.response.use(function (response: AxiosResponse<any, any>) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
})

export default requestConfig