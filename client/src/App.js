import React, { useState, useEffect } from 'react';
import {
    Container,
    AppBar,
    Typography,
    Grow,
    Grid,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'

import { getPosts } from './reducers/posts';
import { StyledAppBar, StyledTypography, StyledImage } from './styles';
import memories from './images/memories.png'; // Update with your actual path
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

const App = () => {

    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(getPosts());  // Dispatch the getPosts thunk
    }, [dispatch]);


    const [currentId, setCurrentId] = useState(0);

    return (
        <Container maxWidth="lg">
            <StyledAppBar position="static" color="inherit">
                <StyledTypography variant="h2" align="center">
                    Memories
                </StyledTypography>
                <StyledImage src={memories} alt="icon" height="60" />
            </StyledAppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;
