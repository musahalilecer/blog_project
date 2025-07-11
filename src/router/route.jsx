import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/templates/Layout';
import NotFound from '../components/templates/NotFound';

const Home   = lazy(() => import('../components/pages/home'));
const About  = lazy(() => import('../components/pages/about'));
const Images = lazy(() => import('../components/pages/images'));
const Login  = lazy(() => import('../components/templates/Login'));
const Detail = lazy(() => import('../components/pages/detail'))

export const route = createBrowserRouter([
  {
    element: <Layout />,      // <-- Ortak Layout burada
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about',   element: <About /> },
      { path: 'images',  element: <Images /> },
      { path: 'login',   element: <Login /> },
      { path: 'detail/:id',  element: <Detail />}
    ],
  },
]);