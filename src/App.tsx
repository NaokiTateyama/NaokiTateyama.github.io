import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ProfileStepper from 'components/ProfileStepper';
import Profile from './components/Profile';

import MobileAppBar from 'components/MobileAppBar';
import Footer from './components/Footer';
import Header from './components/Header';

import { theme } from './styles/theme';

function App() {
  const isPC = useMediaQuery('(min-width:600px)');
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!isPC && <MobileAppBar />}
      <Header isPC={isPC} />
      <Container maxWidth="lg">
        <Box style={{ display: 'flex' }}>
          {isPC && <ProfileStepper />}
          <Profile />
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
