import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    h2: {
      fontSize: '2rem',
      fontWeight: 500
    },
    h3: {
      fontSize: '1.5rem'
    },
    body1: {
      fontSize: '1rem'
    }
  }
});