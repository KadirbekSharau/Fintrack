import React from 'react';

import { Route } from 'react-router-dom';

import { lazyImport } from '~/utils/lazyImport';

const { StatisticsPage } = lazyImport(() => import('./Statistics'), 'StatisticsPage');

export const StatisticsRoutes = [
  <Route path="" element={<StatisticsPage />} key="statistics" />,
];