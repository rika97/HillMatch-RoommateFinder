import React, { useState } from 'react';
import { Box, Typography, Container, Grow, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import UserSidebar from '../../../components/navbar/UserSidebar';


const Matches = () => {

  const [currentId, setCurrentId] = useState(null);

  const drawerWidth = 240;

  const [open, setOpen] = React.useState(true);

  const user = JSON.parse(localStorage.getItem('profile'));

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
        <UserSidebar open={open} setOpen={setOpen} pageTitle="Matches" />
        <Main open={open}>
          <DrawerHeader />
            <Grow in>
              <Typography>Matches</Typography>
            </Grow>
        </Main>
      </Box>
    </div>

  )
}

export default Matches;