import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import decode from 'jwt-decode';

import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Button, Drawer, CssBaseline, Toolbar, List, Typography, Divider, 
  IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PollIcon from '@mui/icons-material/Poll';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import logoSmall from '../../assets/logo-small.png';

import * as actionType from '../../constants/actionTypes';

const UserSidebar = ({ pageTitle, open, setOpen }) => {
  const drawerWidth = 248;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const userId = (user?.result?.sub || user?.result?._id);

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    navigate('/');
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
        const decodedToken = decode(token);
  
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      };
    
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, []);



  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h5" noWrap component="div">
                {pageTitle}
            </Typography>

            <Box sx={{ ml: "auto"}}>
                <Avatar 
                    onClick={() => {navigate("/account");}}
                    alt={user.result.name}
                    src={user.result.imageUrl}>{user.result.name.charAt(0)}
                </Avatar>
            </Box>
            <Box sx={{ ml: 0.3}}>
                <Button
                    variant="contained"
                    disableElevation
                    onClick={() => {navigate("/account");}}>{user.result.name}
                </Button>
            </Box>

            </Toolbar>
        </AppBar>
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
            }}
            variant="persistent"
            anchor="left"
            open={open}
            PaperProps={{
              sx: {
                backgroundColor: "#FFFFFF",
              }
            }}
        >
            <DrawerHeader>
            <Box>
              <a href="/chat">
                <img src={logoSmall} alt="logo" width={150} height={47} />
              </a>
            </Box>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                <ListItem disablePadding onClick={() => {navigate("/chat");}}>
                    <ListItemButton>
                    <ListItemIcon>
                        <ChatIcon />
                    </ListItemIcon>
                    <ListItemText primary="Chat" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={() => {navigate("/apartments");}}>
                    <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Apartments" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={() => {
                    navigate('/survey');
                }}>
                    <ListItemButton>
                    <ListItemIcon>
                        <PollIcon />
                    </ListItemIcon>
                    <ListItemText primary="Survey" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={() => {navigate('/matches')}} >
                    <ListItemButton>
                    <ListItemIcon>
                        <PeopleAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Matches" />
                    </ListItemButton>
                </ListItem>
                
                <Divider />
                <ListItem disablePadding onClick={logout}>
                    <ListItemButton>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    </div>
  )
};

export default UserSidebar;