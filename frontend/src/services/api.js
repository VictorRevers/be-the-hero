import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:6394',
})

export default api;