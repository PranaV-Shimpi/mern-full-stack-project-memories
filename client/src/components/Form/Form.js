// src/components/Form/Form.js
import React, { useState, useEffect } from 'react';
import { Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

// Import styled components
import { StyledPaper, StyledTextField, StyledForm, StyledButton } from './styles';
import { createPost, updatePost } from '../../reducers/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();

  // Set initial post data when editing a post
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  // Clear form
  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <StyledPaper elevation={6}>
      <StyledForm autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>

        {/* Creator */}
        <StyledTextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
        />

        {/* Title */}
        <StyledTextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />

        {/* Message */}
        <StyledTextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
        />

        {/* Tags */}
        <StyledTextField
          name="tags"
          variant="outlined"
          label="Tags (comma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
        />

        {/* File Input */}
        {/* <StyledFileInput
          type="file"
          multiple={false}
          onChange={({ target: { files } }) =>
            setPostData({ ...postData, selectedFile: files[0] ? files[0].base64 : '' })
          }
        /> */}
        <div style={{
          width: '97%',
          margin: '10px 0',
        }}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} onError={() => setPostData({ ...postData, selectedFile: '' })} />
        </div>

        {/* Submit and Clear Buttons */}
        <StyledButton variant="contained" color="primary" size="large" type="submit" fullWidth>
          Submit
        </StyledButton>

        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
          Clear
        </Button>
      </StyledForm>
    </StyledPaper>
  );
};

export default Form;
