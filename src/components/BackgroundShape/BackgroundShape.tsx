import React from 'react';
import { Box } from '@mui/material';

const BackgroundShape: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '25vh', // Adjust the height as needed
        backgroundImage: 'linear-gradient(#283D72, #151B3D)', // This should be the color of your background
        borderBottomLeftRadius: '20%',
        borderBottomRightRadius: '20%',
        zIndex: -1 // Ensure this sits behind your card component
      }}
    />
  );
};

export default BackgroundShape;
