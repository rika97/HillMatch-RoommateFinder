import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const fetchPost = (id) => API.get(`/apartments/${id}`);
export const fetchPosts = (page) => API.get(`/apartments?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/apartments/search?searchQuery=${searchQuery.search || 'none'}}&parking=${searchQuery.parking}&roomType=${searchQuery.roomType}&leaseType=${searchQuery.leaseType}`);
export const createPost = (newPost) => API.post('/apartments', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/apartments/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/apartments/${id}`);
export const likePost = (id) => API.patch(`/apartments/${id}/likePost`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);