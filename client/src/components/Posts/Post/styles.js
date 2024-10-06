import { styled } from '@mui/system';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

// Styled components equivalent to the makeStyles definitions

export const Media = styled(CardMedia)(({ theme }) => ({
    height: 0,
    paddingTop: '56.25%', // 16:9 aspect ratio
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
}));

export const CardContainer = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
}));

export const Overlay = styled('div')({
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
});

export const Overlay2 = styled('div')({
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
});

export const Grid = styled('div')({
    display: 'flex',
});

export const Details = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
});

export const Title = styled(Typography)(({ theme }) => ({
    padding: '0 16px',
}));

export const CardActionsStyled = styled(CardActions)(({ theme }) => ({
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
}));
