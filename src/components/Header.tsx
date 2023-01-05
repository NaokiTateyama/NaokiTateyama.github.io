import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

import { AUTHOR } from 'Information';

type Props = {
  isPC: boolean;
  appBarDataTestId?: string;
  menuDataTestId?: string;
};

const Header: React.FC<Props> = ({
  isPC,
  appBarDataTestId,
  menuDataTestId
}) => {
  return (
    <Box style={{ textAlign: 'center' }} mt={isPC ? 3 : 0} mb={isPC ? 3 : 0}>
      <Typography variant="h2" gutterBottom>
        {AUTHOR.ja}
      </Typography>
      <Typography variant="h2" gutterBottom>
        {AUTHOR.en}
      </Typography>
      <Box>
        <IconButton
          size="large"
          onClick={() => window.open(AUTHOR.github, '_blank')}
        >
          <GitHubIcon fontSize="inherit" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
