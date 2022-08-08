import React from 'react';
import { Auth, Account, Chat, Matches, Survey, Apartment, ApartmentDetails, Error } from './pages';
import { BrowserRouter, Route, Routes, Outlet, Navigate } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  const ProtectedRoute = ({children}) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    return (
      user?<Outlet />: <Navigate to="/"/>
    )
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#2774AE'
      },
      secondary: {
        main: '#FFD100'
      },
      background: {
        default: "#FFFFFF"
      },
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GoogleOAuthProvider clientId='' >
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path="/" element={JSON.parse(localStorage.getItem('profile')) ? <Navigate to="/survey" /> : <Auth/>} />
            <Route path="/" element={<ProtectedRoute />}>
              <Route path="/account" element={<Account />}/>
              <Route path="/chat" element={<Chat />}/>
              <Route path="/survey" element={<Survey />}/>
              <Route path="/matches" element={<Matches />}/>
              <Route path="/matches/search" element={<Matches />}/>
              <Route path="/matches/:id" element={<Matches />}/>
              <Route path="/apartments" element={<Apartment/>} />
              <Route path="/apartments/search" element={<Apartment />} />
              <Route path="/apartments/:id" element={<ApartmentDetails />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
      </GoogleOAuthProvider>
    </ThemeProvider>

  )
}

export default App;
