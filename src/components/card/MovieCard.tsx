import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import * as React from 'react';
import { movieCardTypes } from './Types/CardTypes';

const MovieCard = ({ movie }: movieCardTypes) => {
  console.log('movie', movie);
  return (
    <>
      <CardActionArea>
        <Card sx={{ maxWidth: 300, maxHeight: 200 }}>
          <CardMedia
            component="img"
            alt="movie cover"
            height="150px"
            width="100px"
            image={movie?.image}
          />
          <CardContent>
            <Typography variant="h5">{movie?.title}</Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </>
  );
};

export default MovieCard;
