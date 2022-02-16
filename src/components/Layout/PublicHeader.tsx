import { AppBar, Button, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const PublicHeader = () => {
  return (
    <>
      <AppBar position="static" color="inherit" style={{ marginBottom: 50 }}>
        <Toolbar>
          <Button>
            <Link to="/login">Login</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default PublicHeader;
