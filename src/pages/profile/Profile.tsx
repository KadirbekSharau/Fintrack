import { Box } from '@mui/material';
import React from 'react';
import BackgroundShape from '~/components/BackgroundShape/BackgroundShape';
import Footer from '~/components/Footer/Footer';
import Layout from '~/components/Layout/Layout';
import Profile from '~/features/profile/components/Profile';

export function ProfilePage() {
  return (
    <Layout>
      <Box sx={{display: 'flex',  flexDirection: 'column'}}>
        <BackgroundShape></BackgroundShape>
        <Profile />
      </Box>
      <Footer showActionButton={false}/>
    </Layout>
  );
};

export default ProfilePage;

