import React from "react";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

function Footer(){
  return (
    <footer>
      <Box style={{textAlign: 'center'}} mt={2} mb={2}>
        <Typography variant='body2'>2022 &copy; Naoki Tateyama</Typography>
      </Box>
    </footer>
  )
}

export default Footer