// Signup.tsx
import React, { useState } from 'react';
import {
  Box, Button, Container, TextField, FormControlLabel, Checkbox, Typography, Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import authApi from '~/api/auth/api';
import { SignupRequest } from '~/api/auth/types';

export function Signup() {
  const navigate = useNavigate();
  const [signup] = authApi.endpoints.signup.useMutation();
  const [credentials, setCredentials] = useState<SignupRequest>({
    username: '',
    password: '',
    name: '',
  });

  const handleSuccess = () => {
    toast.success('Signed up successfully');
    navigate('/');
  };

  const handleSignup = () => signup(credentials)
    .unwrap()
    .then(handleSuccess)
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
          Sign Up
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          label="Name"
          placeholder="Name"
          onChange={({ target: { value } }) => setCredentials({ ...credentials, name: value })}
        />
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
        <FormControlLabel
          control={<Checkbox name="terms" />}
          label={
            <Typography variant="body2">
              By signing up, you agree to the{' '}
              <Link href="#" underline="hover">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="#" underline="hover">
                Privacy Policy
              </Link>.
            </Typography>
          }
        />
        <Button
          fullWidth
          variant="contained"
          onClick={handleSignup}
          sx={{ backgroundColor: "#243A72",  mt: 2, mb: 2 }}
        >
          Sign Up
        </Button>
        <Button
          fullWidth
          variant="text"
          sx={{ mt: 2 }}
          onClick={() => navigate('/login')}
        >
          Already have an account? Login
        </Button>
      </Box>
    </Container>
  );
}
