import { styled } from '@mui/material/styles';
import { Paper, TextField, Button } from '@mui/material';

// Styled Paper component
const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
}));

// Styled TextField component
const StyledTextField = styled(TextField)(({ theme }) => ({
    margin: theme.spacing(1),
}));

// Styled Form Component
const StyledForm = styled('form')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
});

// Styled input for file upload
const StyledFileInput = styled('input')({
    width: '97%',
    margin: '10px 0',
});

// Styled Button component
const StyledButton = styled(Button)(({ theme }) => ({
    marginBottom: theme.spacing(1),
}));

// Export all styled components
export { StyledPaper, StyledTextField, StyledForm, StyledFileInput, StyledButton };
