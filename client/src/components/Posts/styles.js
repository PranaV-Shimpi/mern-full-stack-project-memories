import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// Styled main container
const MainContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
}));

// Styled margin for smaller components
const SmMargin = styled(Box)(({ theme }) => ({
    margin: theme.spacing(1),
}));

// Styled action div for text alignment
const ActionDiv = styled(Box)(({ theme }) => ({
    textAlign: 'center',
}));

export { MainContainer, SmMargin, ActionDiv };
