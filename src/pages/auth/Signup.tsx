import React from 'react';

import Layout from '~/components/Layout/Layout';
import { Signup } from '~/features/auth';

export function SignupPage() {
  return (
    <Layout>
      <Signup />
    </Layout>
  );
}
