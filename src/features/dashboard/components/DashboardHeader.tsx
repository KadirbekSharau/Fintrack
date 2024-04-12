import React from 'react';
import { Box, Typography } from '@mui/material';

const DashboardHeader: React.FC<{}> = () => {
  return (
    <Box sx={{ bgcolor: '#f1f3f6', p: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Good afternoon, {/* Insert user name here */}
        </Typography>
      </Box>
    </Box>
  );
};

export default DashboardHeader;