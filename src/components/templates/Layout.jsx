import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../organisms/Navbar';

export default function Layout() {
  return (
    <div className="flex">
      <Navbar />
      <main className="ml-60 p-6 w-full">
        <Outlet />
      </main>
    </div>
  );
}