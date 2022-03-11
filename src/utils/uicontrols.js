
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#EA7F28'),
    backgroundColor: '#EA7F28',
    '&:hover': {
      backgroundColor: '#D37324',
    },
  }));

  export {ColorButton}