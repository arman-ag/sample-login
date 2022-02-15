import Layout from 'components/Layout';
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Home: FC = () => {
  return (
    <Layout>
      <h2>this is it</h2>
      <Outlet />
    </Layout>
  );
};

export default Home;
