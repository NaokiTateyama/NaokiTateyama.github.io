import React from 'react';
import Profile from './components/Profile';
import ProfileStepper from 'components/ProfileStepper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/Header';
import Footer from './components/Footer';

import { theme } from './styles/theme';

function App() {
  const isPC = useMediaQuery('(min-width:600px)');
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header isPC={isPC}/>
      <Container maxWidth='lg'>
        <Box style={{display: 'flex'}}>
          {isPC && <ProfileStepper/>}
          <Profile/>
        </Box>
      </Container>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
