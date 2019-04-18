import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID f9790be74fb7cbb8706d3580a22f1dcac0fef01e65148af4f445c28e5a385076'
    } 
});