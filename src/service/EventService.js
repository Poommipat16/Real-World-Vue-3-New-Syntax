import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Code-Pop/REal-World_Vue-3',
    // Below is authentication
    withCredentials: false,
    headers:{
        Accept:'application/json',
        'Content-Type': 'application/json'
    }
})

export default{
    getEvents(){
        return apiClient.get('/events')
    }
}