import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/templates/Layout';
import NotFound from '../components/templates/NotFound';
import Register from '../components/templates/Register';

const Home      = lazy(() => import('../components/pages/home'));
const About     = lazy(() => import('../components/pages/about'));
const Images    = lazy(() => import('../components/pages/images'));
const Login     = lazy(() => import('../components/templates/Login'));
const Detail    = lazy(() => import('../components/pages/detail'));
const Dashboard = lazy(() => import('../components/pages/dashboard'));
const WritePost = lazy(() => import('../components/pages/writepost'));

const Loader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export const route = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true,          element: <Suspense fallback={<Loader />}><Home /></Suspense> },
      { path: 'dashboard',    element: <Suspense fallback={<Loader />}><Dashboard /></Suspense> },
      { path: 'write',        element: <Suspense fallback={<Loader />}><WritePost /></Suspense> },
      { path: 'about',        element: <Suspense fallback={<Loader />}><About /></Suspense> },
      { path: 'images',       element: <Suspense fallback={<Loader />}><Images /></Suspense> },
      { path: 'login',        element: <Suspense fallback={<Loader />}><Login /></Suspense> },
      { path: 'register',     element: <Suspense fallback={<Loader />}><Register /></Suspense> },
      { path: 'detail/:id',   element: <Suspense fallback={<Loader />}><Detail /></Suspense> },
    ],
  },
]);
