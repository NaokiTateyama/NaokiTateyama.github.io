import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub';

function Header(){
  return (
    <header>
      <Box style={{textAlign: 'center'}} mt={3} mb={3}>
        <Typography variant='h2' gutterBottom>立山 尚樹</Typography>
        <Typography variant='h2' gutterBottom>Naoki Tateyama</Typography>
        <Box>
          <IconButton size='large' onClick={()=>window.open('https://github.com/NaokiTateyama', '_blank')}>
            <GitHubIcon fontSize='inherit'/>
          </IconButton>
        </Box>
      </Box>
    </header>
  )
}

export default Header