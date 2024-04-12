import React from 'react';

import { Route } from 'react-router-dom';

import { lazyImport } from '~/utils/lazyImport';

const { ProfilePage } = lazyImport(() => import('./Profile'), 'ProfilePage');

export const ProfileRoutes = [
  <Route path="" element={<ProfilePage />} key="profile" />,
];