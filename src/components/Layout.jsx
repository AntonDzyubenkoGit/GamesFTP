import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="bg-background border-b-2 border-slate-900">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
