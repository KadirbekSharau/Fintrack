// Footer.tsx
import React from 'react';
import { Box, Fab, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

type FooterProps = {
  showActionButton?: boolean;
};

const Footer: React.FC<FooterProps> = ({ showActionButton = false }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '60px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10px',
        boxShadow: '0px -4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <IconButton color="inherit" onClick={() => navigate('/dashboard')}>
        <HomeIcon sx={{ color: 'gray' }} />
      </IconButton>
      <IconButton color="inherit" onClick={() => navigate('/statistics')}>
        <BarChartIcon sx={{ color: 'gray' }} />
      </IconButton>
      {showActionButton && (
        <Fab color="primary" aria-label="add" sx={{ position: 'absolute', top: -30 }}>
          +
        </Fab>
      )}
      <IconButton color="inherit" onClick={() => navigate('/import')}>
        <WalletIcon sx={{ color: 'gray' }} />
      </IconButton>
      <IconButton color="inherit" onClick={() => navigate('/profile')}>
        <PersonIcon sx={{ color: 'gray' }} />
      </IconButton>
    </Box>
  );
};

export default Footer;

