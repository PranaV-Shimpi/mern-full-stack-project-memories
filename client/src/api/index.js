// src/api/index.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(BASE_URL);
export const createPost = (newPost) => axios.post(BASE_URL, newPost);
export const likePost = (id) => axios.patch(`${BASE_URL}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${BASE_URL}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${BASE_URL}/${id}`);
