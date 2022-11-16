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
import { information } from './Information';

function App() {
  const isPC = useMediaQuery('(min-width:600px)');
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        isPC={isPC}
        name_ja={information.name_ja}
        name_en={information.name_en}
        account={information.account}
      />
      <Container maxWidth="lg">
        <Box style={{ display: 'flex' }}>
          {isPC && <ProfileStepper />}
          <Profile />
        </Box>
      </Container>
      <Footer name_en={information.name_en} />
    </ThemeProvider>
  );
}

export default App;
