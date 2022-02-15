import { Button, Input } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC, useState } from 'react';
import { api } from 'services/api.service';

const Login: FC = () => {
  const [formValues, setformValues] = useState({});
  const handleInputChange = (value: { email?: string; password?: string }) => {
    setformValues({ ...formValues, ...value });
  };

  const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    api
      .post('https://reqres.in/api/login', formValues)
      .then((res) => localStorage.setItem('user', res.data.token));
  };
  return (
    <>
      <div>login page</div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <Box display={'flex'} flexDirection={'column'}>
          <Input onChange={(e) => handleInputChange({ email: e.target.value })} />
          <Input onChange={(e) => handleInputChange({ password: e.target.value })} />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Login;
