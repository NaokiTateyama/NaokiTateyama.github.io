import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import React, { useState } from 'react';

import { BIO_ORDER } from 'Information';
import { jumpTo } from 'utils/JumpTo';

type Props = {
  appBarDataTestId?: string;
  menuDataTestId?: string;
};

const MobileAppBar: React.FC<Props> = ({
  appBarDataTestId,
  menuDataTestId
}) => {
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
          {BIO_ORDER.map((bio) => {
            return (
              <MenuItem
                key={`menu-${bio.id}`}
                sx={{
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  margin: 2
                }}
                onClick={() => handleJump(bio.id)}
              >
                {bio.title}
              </MenuItem>
            );
          })}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MobileAppBar;
