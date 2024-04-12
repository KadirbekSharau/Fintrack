// Profile.tsx
import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';
import LogoutIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import authApi from '~/api/auth/api';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [logout] = authApi.endpoints.logout.useMutation();

  const handleSuccess = () => {
    toast.success('Logged out successfully');
    navigate('/login');
  };

  const handleLogout = () => logout()
    .unwrap().then(handleSuccess)
    .catch((err) => toast.error(err.data));

  return (
    <Box sx={{ width: '100%', textAlign: 'center', pt: 4, mt: 25 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
        Profile
      </Typography>
      <Box sx={{ marginBottom: '20px' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Yernar Duisebay</Typography>
        <Typography variant="subtitle1">@yernar_duisebay</Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Button
        startIcon={<LogoutIcon />}
        onClick={handleSuccess}
        sx={{ textTransform: 'none' }}
      >
        Log out
      </Button>
    </Box>
  );
};

export default Profile;
