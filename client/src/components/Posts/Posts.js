import React from 'react';
import { CircularProgress, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import { Container } from './styles'; // Import styled container directly

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  if (!posts.length) return <CircularProgress />; 

  return (
    <Container direction="row" flexWrap="wrap" spacing={3}>
      {posts.map((post) => (
        <Stack key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Stack>
      ))}
    </Container>
  );
};

export default Posts;