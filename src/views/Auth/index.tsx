import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Login: FC = () => {
  return (
    <>
      <div>login page</div>
      <Link to="/" style={{ padding: 5 }}>
        Home
      </Link>
    </>
  );
};

export default Login;
