import React from 'react';

import { Route } from 'react-router-dom';

import { lazyImport } from '~/utils/lazyImport';

const { ImportPage } = lazyImport(() => import('./Import'), 'ImportPage');

export const ImportRoutes = [
  <Route path="" element={<ImportPage />} key="import" />,
];