import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
  name_en: string;
  dataTestId?: string;
};

const Footer = ({ name_en, dataTestId }: Props): JSX.Element => {
  return (
    <footer>
      <Box style={{ textAlign: 'center' }} mt={2} mb={2}>
        <Typography variant="body2" data-testid={dataTestId}>
          2022 &copy; {name_en}
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
