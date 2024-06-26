import React from 'react';

import Layout from '~/components/Layout/Layout';
import { Login } from '~/features/auth';

export function LoginPage() {
  return (
    <Layout>
      <Login />
    </Layout>
  );
}
