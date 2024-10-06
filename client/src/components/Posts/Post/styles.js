import { styled } from '@mui/material/styles';
import { Card, CardMedia, CardActions, Typography, Grid } from '@mui/material';

// Styled Card component
const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
}));

// Styled CardMedia component
const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
}));

// Styled Overlay component for text
const Overlay = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    color: 'white',
}));

// Styled Grid container
const StyledGrid = styled(Grid)(({ theme }) => ({
    display: 'flex',
}));

// Styled Details component
const Details = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
}));

// Styled Title component
const Title = styled(Typography)(({ theme }) => ({
    padding: '0 16px',
}));

// Styled CardActions component
const StyledCardActions = styled(CardActions)(({ theme }) => ({
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
}));

// Additional styles for specific components
const Media = styled('div')(({ theme }) => ({
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
}));

const Border = styled('div')(({ theme }) => ({
    border: 'solid',
}));

const FullHeightCard = styled('div')(({ theme }) => ({
    height: '100%',
}));

const OverlayPosition1 = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
}));

const OverlayPosition2 = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
}));

const StyledGridContainer = styled(Grid)(({ theme }) => ({
    display: 'flex',
}));

export {
    StyledCard,
    StyledCardMedia,
    Overlay,
    StyledGrid,
    Details,
    Title,
    StyledCardActions,
    Media,
    Border,
    FullHeightCard,
    OverlayPosition1,
    OverlayPosition2,
    StyledGridContainer,
};
