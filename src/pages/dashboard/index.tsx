import React from 'react';

import { Route } from 'react-router-dom';

import { lazyImport } from '~/utils/lazyImport';

const { DashboardPage } = lazyImport(() => import('./Dashboard'), 'DashboardPage');

export const DashboardRoutes = [
  <Route path="" element={<DashboardPage />} key="dashboard" />,
];
