import StarIcon from '@mui/icons-material/Star';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { modalTypes } from './types/modalTypes';
const ModalCard = ({ movie }: modalTypes) => {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          bgcolor: 'background.paper',
          p: 4
        }}>
        <CardActionArea>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="150px"
              width="100px"
              image={movie?.image}
            />
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h6">{`${movie?.title}   (${movie?.year})`}</Typography>
                <Box display="flex" alignItems="center">
                  <ThumbUpOutlinedIcon fontSize="small" style={{ marginRight: 5 }} />
                  <Typography>{movie?.imDbRating}</Typography>
                </Box>
              </Box>
              <Typography>{movie?.crew}</Typography>

              <Box display="flex" alignItems="center">
                <StarIcon fontSize="small" style={{ marginRight: 10 }} />
                <Typography>{movie?.rank}</Typography>
              </Box>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </CardActionArea>
      </Box>
    </>
  );
};

export default ModalCard;
