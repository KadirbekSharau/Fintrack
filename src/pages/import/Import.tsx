import React from 'react';
import { Box } from '@mui/material';
import BackgroundShape from '~/components/BackgroundShape/BackgroundShape';
import ImportDocumentForm from '~/features/import/components/ImportDocumentForm';
import Layout from '~/components/Layout/Layout';
import Footer from '~/components/Footer/Footer';

export function ImportPage() {
  return (
    <Layout>
        <Box sx={{ position: 'relative', height: '100vh' }}>
        <BackgroundShape />
        <ImportDocumentForm />
        {/* ... other components */}
        </Box>
        <Footer showActionButton={false}/>
    </Layout>
  );
};

export default ImportPage;
