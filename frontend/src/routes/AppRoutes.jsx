import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routesConfig } from './routesConfig';

const router = createBrowserRouter(routesConfig);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
