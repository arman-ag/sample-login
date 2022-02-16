import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PasswordIcon from '@mui/icons-material/Password';
import { Button, Card, CardContent, Grid, InputAdornment, TextField } from '@mui/material';
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
        toast(err.response.data.error);
      });
  };
  return (
    <>
      <Grid
        container
        style={{ height: '100Vh' }}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}>
        <Grid item xs={10} md={5}>
          <Card>
            <CardContent>
              <form onSubmit={(event) => handleSubmit(event)}>
                <Box
                  style={{ height: '40vh', padding: 50 }}
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'space-around'}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    onChange={(e) => handleInputChange({ email: e.target.value })}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AlternateEmailIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PasswordIcon />
                        </InputAdornment>
                      )
                    }}
                    label="password"
                    variant="outlined"
                    onChange={(e) => handleInputChange({ password: e.target.value })}
                  />
                  <Button variant="contained" color="primary" type="submit">
                    Submit
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <ToastContainer />
    </>
  );
};

export default Login;
