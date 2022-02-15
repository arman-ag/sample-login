import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { layout } from './types/LayoutTypes';
const Layout = ({ children }: layout) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
