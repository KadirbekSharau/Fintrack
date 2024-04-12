import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import authApi from '~/api/auth/api';
import { LoginRequest } from '~/api/auth/types';

export function Login() {
  const navigate = useNavigate();
  const [login] = authApi.endpoints.login.useMutation();
  const [credentials, setCredentials] = useState<LoginRequest>({
    username: '',
    password: '',
  });

  const handleSuccess = () => {
    toast.success('Logged in successfully');
    navigate('/dashboard');
  };

  const handleLogin = () => login(credentials)
    .unwrap().then(handleSuccess)
    .catch((err) => toast.error(err.data));

  return (
    <Container maxWidth="xs" sx={{ pt: 4 }}>
      <Box
        flexDirection="column"
        display="flex"
        gap={2}
        component="form"
        noValidate
        autoComplete="off"
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: '80vh' 
        }}
      >
        <Typography variant="h5" sx={{ mb: 4 }}>
          Login
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          label="Username"
          placeholder="Username"
          //type="email"
          onChange={({ target: { value } }) => setCredentials({ ...credentials, username: value })}

        />
        <TextField
          fullWidth
          variant="outlined"
          label="Password"
          placeholder="Password"
          type="password"
          onChange={({ target: { value } }) => setCredentials({ ...credentials, password: value })}
        />
        <Button
          fullWidth
          variant="contained"
          onClick={handleLogin}
          sx={{ 
            mt: 2, 
            mb: 2, 
            backgroundColor: '#243A72', 
            color: 'white',
            '&:hover': {
              backgroundColor: '#243A72'
            }
          }}
        >
          Login
        </Button>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don’t have an account yet?{' '}
          <Link 
            component="button" 
            variant="body2" 
            onClick={() => navigate('/dashboard')} 
            sx={{ color: '#243A72', textDecoration: 'none' }}
          >
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}