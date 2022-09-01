import React from 'react';
import Profile from './components/Profile';
import ProfileStepper from 'components/ProfileStepper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider } from '@mui/material/styles';

import Header from 'Header';
import Footer from './Footer';

import { theme } from './styles/theme';

function App() {
  const isPC = useMediaQuery('(min-width:600px)');
  return (
    <ThemeProvider theme={theme}>
      <Header/>
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
