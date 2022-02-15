import { Card, CardActionArea, CardActions, CardContent, CardMedia } from '@mui/material';
import { Box } from '@mui/system';
import { singleUserType } from 'components/UserCard/type';
import * as React from 'react';
const ModalCard = ({ user }: singleUserType) => {
  console.log('user', user);
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
              image={user?.avatar}
            />
            <CardContent>
              {/* <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h6">{`${user?.title}   (${user?.year})`}</Typography>
                <Box display="flex" alignItems="center">
                  <ThumbUpOutlinedIcon fontSize="small" style={{ marginRight: 5 }} />
                  <Typography>{user?.imDbRating}</Typography>
                </Box>
              </Box>
              <Typography>{user?.crew}</Typography>

              <Box display="flex" alignItems="center">
                <StarIcon fontSize="small" style={{ marginRight: 10 }} />
                <Typography>{user?.rank}</Typography>
              </Box> */}
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </CardActionArea>
      </Box>
    </>
  );
};

export default ModalCard;
