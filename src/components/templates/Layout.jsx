import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../organisms/Navbar';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* md: sidebar 240px, mobile: top bar 56px */}
      <main className="md:ml-60 pt-14 md:pt-0 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
