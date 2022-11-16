import React, { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';

import { jumpTo, ID } from 'utils/JumpTo';

type Props = {
  isPC: boolean;
  name_ja: string;
  name_en: string;
  account: string;
  appBarDataTestId?: string;
  menuDataTestId?: string;
};

const Header = ({
  isPC,
  name_ja,
  name_en,
  account,
  appBarDataTestId,
  menuDataTestId
}: Props): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleJump = (id: string) => {
    setAnchorEl(null);
    setTimeout(() => {
      jumpTo(id);
    }, 0);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {!isPC && (
        <AppBar
          position="sticky"
          sx={{
            top: 0,
            backgroundColor: 'transparent',
            backgroundImage: 'none !important',
            boxShadow: 'none !important'
          }}
          data-testid={appBarDataTestId}
        >
          <Toolbar>
            <div style={{ flexGrow: 1 }}></div>
            <IconButton
              sx={{ justifyContent: 'flex-end' }}
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              PaperProps={{
                style: { width: '100%' }
              }}
              BackdropProps={{
                style: { backgroundColor: 'rgba(1,1,1,0.6)' }
              }}
              TransitionProps={{
                timeout: 0
              }}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              data-testid={menuDataTestId}
            >
              <MenuItem
                sx={{ justifyContent: 'center', fontSize: '1.2rem', margin: 2 }}
                onClick={() => handleJump(ID.ABOUT)}
              >
                About
              </MenuItem>
              <MenuItem
                sx={{ justifyContent: 'center', fontSize: '1.2rem', margin: 2 }}
                onClick={() => handleJump(ID.JOB_EXPERIENCE)}
              >
                Job experience
              </MenuItem>
              <MenuItem
                sx={{ justifyContent: 'center', fontSize: '1.2rem', margin: 2 }}
                onClick={() => handleJump(ID.EDUCATION)}
              >
                Education
              </MenuItem>
              <MenuItem
                sx={{ justifyContent: 'center', fontSize: '1.2rem', margin: 2 }}
                onClick={() => handleJump(ID.SKILLS)}
              >
                Skills
              </MenuItem>
              <MenuItem
                sx={{ justifyContent: 'center', fontSize: '1.2rem', margin: 2 }}
                onClick={() => handleJump(ID.PUBLICATIONS)}
              >
                Publications
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      )}
      <Box
        style={{ textAlign: 'center' }}
        mt={isPC ? 3 : 0}
        mb={isPC ? 3 : 0}
      >
        <Typography variant="h2" gutterBottom>
          {name_ja}
        </Typography>
        <Typography variant="h2" gutterBottom>
          {name_en}
        </Typography>
        <Box>
          <IconButton
            size="large"
            onClick={() =>
              window.open(`https://github.com/${account}`, '_blank')
            }
          >
            <GitHubIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Header;
