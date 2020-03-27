import axios from 'axios';

const api = axios.create({
    baseURL:'http://192.168.0.17:6394'
});

export default api;