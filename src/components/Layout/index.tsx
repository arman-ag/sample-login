import { Container } from '@mui/material';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { layout } from './types/LayoutTypes';
export const LayoutPrivate = ({ children }: layout) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};
