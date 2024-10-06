import express from 'express';
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

const router = express.Router();

// Helper function to handle invalid ObjectId error
const handleInvalidId = (id, res) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: `No post found with id: ${id}` });
  }
};

// Controller to get all posts
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    return res.status(200).json(postMessages);
  } catch (error) {
    return res.status(500).json({ message: 'Error retrieving posts.', error: error.message });
  }
};

// Controller to get a specific post by id
export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    // Validate the ObjectId
    if (handleInvalidId(id, res)) return;

    const post = await PostMessage.findById(id);
    if (!post) {
      return res.status(404).json({ message: `Post not found with id: ${id}` });
    }
    
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: 'Error retrieving the post.', error: error.message });
  }
};

// Controller to create a new post
export const createPost = async (req, res) => {
  const { title, message, selectedFile, creator, tags } = req.body;

  if (!title || !message || !creator) {
    return res.status(400).json({ message: 'Title, message, and creator are required.' });
  }

  const newPostMessage = new PostMessage({
    title, message, selectedFile, creator, tags,
  });

  try {
    await newPostMessage.save();
    return res.status(201).json(newPostMessage);
  } catch (error) {
    return res.status(409).json({ message: 'Error creating post.', error: error.message });
  }
};

// Controller to update an existing post by id
export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;

  if (handleInvalidId(id, res)) return;

  const updatedPost = {
    creator, title, message, tags, selectedFile, _id: id,
  };

  try {
    const post = await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });
    if (!post) {
      return res.status(404).json({ message: `Post not found with id: ${id}` });
    }
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating post.', error: error });
  }
};

// Controller to delete a post by id
export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (handleInvalidId(id, res)) return;

  try {
    const deletedPost = await PostMessage.findByIdAndRemove(id);
    if (!deletedPost) {
      return res.status(404).json({ message: `Post not found with id: ${id}` });
    }
    return res.status(200).json({ message: 'Post deleted successfully.' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting post.', error: error.message });
  }
};

// Controller to like a post by id
export const likePost = async (req, res) => {
  const { id } = req.params;

  if (handleInvalidId(id, res)) return;

  try {
    const post = await PostMessage.findById(id);
    if (!post) {
      return res.status(404).json({ message: `Post not found with id: ${id}` });
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    return res.status(200).json(updatedPost);
  } catch (error) {
    return res.status(500).json({ message: 'Error liking post.', error: error.message });
  }
};

export default router;
