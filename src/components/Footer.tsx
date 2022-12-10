import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AUTHOR } from '../Information';

type Props = {
  dataTestId?: string;
};

const Footer = ({ dataTestId }: Props): JSX.Element => {
  return (
    <footer>
      <Box style={{ textAlign: 'center' }} mt={2} mb={2}>
        <Typography variant="body2" data-testid={dataTestId}>
          2022 &copy; {AUTHOR.en}
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
