import axios from 'axios';

const http = axios.create({
    baseURL: 'https://corona.lmao.ninja/v2'
});

export default http;
