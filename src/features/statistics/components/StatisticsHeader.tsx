import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const StatisticsHeader: React.FC = () => {
  return (
    <AppBar position="static" elevation={0} sx={{backgroundColor: 'white', color: 'black'}}>
      <Toolbar>
        {/* <IconButton edge="start" color="inherit" aria-label="back">
          <ArrowBackIcon />
        </IconButton> */}
        <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
          Statistics
        </Typography>
        {/* <IconButton color="inherit" aria-label="settings">
          <MoreVertIcon />
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
};

export default StatisticsHeader;

