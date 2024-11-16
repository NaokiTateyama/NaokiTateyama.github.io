import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AUTHOR } from '../Information';

type Props = {
  dataTestId?: string;
};

const Footer = ({ dataTestId }: Props) => {
  return (
    <footer>
      <Box sx={{ textAlign: 'center' }} mt={2} mb={2}>
        <Typography variant="body2" data-testid={dataTestId}>
          2024 &copy; {AUTHOR.en}
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
