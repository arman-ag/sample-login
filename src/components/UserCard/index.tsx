import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import * as React from 'react';
import { singleUserType } from './type';

const UserCard = ({ user }: singleUserType) => {
  console.log('user', user);

  return (
    <>
      <CardActionArea>
        <Card sx={{ maxWidth: 300, maxHeight: 200 }}>
          <CardMedia
            component="img"
            alt="movie cover"
            height="150px"
            width="100px"
            image={user?.avatar}
          />
          <CardContent>
            <Typography variant="h5">{user?.first_name}</Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </>
  );
};

export default UserCard;
