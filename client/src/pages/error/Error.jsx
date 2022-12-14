import React from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, Typography, Button } from '@mui/material';

const Error = () => {
  const navigate = useNavigate();
  return (
    <Paper align="center" elavation={0}>
      <div>
        <Typography variant='h1' color="primary">Oops!</Typography>
        <Typography variant='h3'>You've reached the void.</Typography>
        {/* <img src={errorImage} width={500} /> */}
      </div>
      <Button onClick={() => {navigate("/");}} color="primary" variant="outlined" >Go To Homepage</Button>
    </Paper>
  )
}

export default Error;