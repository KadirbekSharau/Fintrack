import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ProtectedRoute } from '~/components/ProtectedRoute';
import { AuthRoutes } from '~/pages/auth';
import { DashboardRoutes } from '~/pages/dashboard';
import { ProfileRoutes } from '~/pages/profile';
import { StatisticsRoutes } from './pages/statistics';
import { ImportRoutes } from './pages/import';

export function AppRoutes() {
  return (
    <BrowserRouter basename={import.meta.env.VITE_PUBLIC_URL}>
      <Routes>
        {AuthRoutes}
        <Route path="/dashboard/*" element={<ProtectedRoute />}>
          {DashboardRoutes}
        </Route>
        <Route path="/profile/*" element={<ProtectedRoute />}>
          {ProfileRoutes}
        </Route>
        <Route path="/statistics/*" element={<ProtectedRoute />}>
          {StatisticsRoutes}
        </Route>
        <Route path="/import/*" element={<ProtectedRoute />}>
          {ImportRoutes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
