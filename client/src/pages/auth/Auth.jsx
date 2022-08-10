import React, { useState } from 'react';
import { Button, Paper, Grid, Typography, Container, Divider, Stack, Autocomplete, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import Input from './Input';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';
import logo from '../../assets/logo.png';
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', UID: ''};

const Auth = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const theme = createTheme({
    palette: {
      background: {
        default: "#2774AE"
      },
    }
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Container component="main" maxWidth="xs" sx={{ mt: 10 }}>
          <img src={logo} alt="logo" width={396} height={114}/>
          <Paper elevation={3} sx={{ borderRadius: 3, mt: 3}} align="center">
            <Typography variant="h6" color="textSecondary">{isSignup ? 'Sign up' : 'Sign in'}</Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={0.7} style={{width: "300px"}}>
                {
                  isSignup && (
                    <>
                      <Input name="firstName" label="First Name" handleChange={handleChange} half />
                      <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                      <Input name="UID" label="UCLA UID" handleChange={handleChange} />
                    </>
                  )}
                  <Input name="email" label="Email Address (@ucla.edu)" handleChange={handleChange} type="email" />
                  <Input name="password" label="Password" autocomplete="on" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                  { isSignup && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password"/>}
                  <Button type="submit" fullWidth variant="contained" color="primary" sx={{mt: 3, mb: 2}}>
                    {isSignup ? 'Sign Up' : 'Sign In'}
                  </Button>
              </Grid>
              <Divider variant="middle" />
              <Grid container align="center" justify="center">
                <Grid item>
                    <Button onClick={switchMode}>
                        { isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up" }
                    </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </ThemeProvider>
    </div>
  )
};

export default Auth;