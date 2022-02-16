import { Button, Input } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { history } from 'routers/history';
import { api } from 'services/api.service';

const Login: FC = () => {
  const [formValues, setFormValues] = useState({});
  const handleInputChange = (value: { email?: string; password?: string }) => {
    setFormValues({ ...formValues, ...value });
  };

  const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    api
      .post('https://reqres.in/api/login', formValues)
      .then((res) => {
        toast('login sucsesfully'),
          localStorage.setItem('user', res.data.token),
          setTimeout(() => {
            history.push('/user-info');
          }, 5000);
      })
      .catch((err) => {
        toast('user or pass wrong');
      });
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
      <ToastContainer />
    </>
  );
};

export default Login;
