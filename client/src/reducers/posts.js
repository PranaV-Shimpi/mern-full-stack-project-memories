// src/reducers/posts.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';

// Async thunks to handle API requests
export const getPosts = createAsyncThunk('posts/fetchAll', async () => {
  const response = await api.fetchPosts();
  return response.data;
});

export const createPost = createAsyncThunk('posts/create', async (newPost) => {
  const response = await api.createPost(newPost);
  return response.data;
});

export const updatePost = createAsyncThunk('posts/update', async ({ id, post }) => {
  const response = await api.updatePost(id, post);
  return response.data;
});

export const likePost = createAsyncThunk('posts/like', async (id) => {
  const response = await api.likePost(id);
  return response.data;
});

export const deletePost = createAsyncThunk('posts/delete', async (id) => {
  await api.deletePost(id);
  return id;
});

// Post slice
const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => action.payload)
      .addCase(createPost.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        return state.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
      })
      .addCase(likePost.fulfilled, (state, action) => {
        return state.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        return state.filter((post) => post._id !== action.payload);
      });
  },
});

export default postsSlice.reducer;
