import React, { useEffect } from 'react';
import { Box, Typography, Paper, CircularProgress, Divider, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';

import { getPost, getPostsBySearch } from '../../../actions/posts';
import UserSidebar from '../../../components/navbar/UserSidebar';

const ApartmentDetails = () => {
  const [open, setOpen] = React.useState(true);
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  if(!post) return "no post";

  if(isLoading) {
    return (
    <Paper elevation={0}>
      <Box sx={{mt: 20}}display="flex" alignItems="center" justifyContent="center">
        <CircularProgress size="7em" />
      </Box>
      <Box sx={{mt: 5}} display="flex" alignItems="center" justifyContent="center">
        <Typography variant="h4" color="primary">Loading Details 🏠</Typography>
      </Box>
    </Paper>
    );
  };

  const drawerWidth = 240;

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  return (

    <div>
      <Box sx={{ display: 'flex' }}>
        <UserSidebar open={open} setOpen={setOpen} pageTitle="Apartments" />
        <Main open={open}>
          <DrawerHeader />
          <Paper>
            <div>
              <Button sx={{mb: 2}} color="primary" onClick={()=>navigate("/apartments")}>
                <ArrowBackIosNewIcon />&nbsp;Back to Apartments
              </Button>
              <div>
                <Typography variant="h4" component="h2">{post.title}</Typography>
                <Typography variant="body1">Posted By: {post.refCode || "N/A"}</Typography>
                <Typography variant="h6" color="primary">Rent: ${post.rentPrice}, Utilities: ${post.utilitiesPrice}</Typography>
                <Typography variant="h6" color="primary">Parking: {post.parking}, Time to Campus: {post.travelTime} mins</Typography>
                <Typography variant="h6" color="primary">Room Type: {post.roomType}, Lease Type: {post.leaseType}</Typography>
              </div>
              <div>
                <img width="300px" src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
              </div>
              <div>
                <Typography variant='body1'>Details: </Typography>
                <Typography gutterBottom variant="body1" component="p">{post.description}</Typography>
              </div>
            </div>
          </Paper>
        </Main>
      </Box>
    </div>
  )
}

export default ApartmentDetails;
