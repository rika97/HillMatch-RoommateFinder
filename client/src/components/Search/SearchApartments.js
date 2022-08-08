import React, { useState } from 'react';
import { TextField, Typography, Paper, Button, Stack, Autocomplete, Slider } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPostsBySearch } from '../../actions/posts';

const SearchApartments = () => {
    const [search, setSearch] = useState('');
    const [parking, setParking] = useState('');
    const [roomType, setRoomType] = useState('');
    const [leaseType, setLeaseType] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const searchPost = () => {
      if (search.trim() || parking || roomType || leaseType ) {
        dispatch(getPostsBySearch({ search, parking: parking, roomType: roomType, leaseType: leaseType }));
        navigate(`/apartments/search?searchQuery=${search || 'none'}}&parking=${parking || 'none'}&roomType=${roomType || 'none'}&leaseType=${leaseType || 'none'}`);
      } else {
        navigate('/apartments');
      }
      };
      
    const handleKeyPress = (e) => {
      if(e.keyCode === 13) {
          searchPost();
      }
      };
  
    
    return (
        <Paper>
            <Typography variant="h6" align="center">Search Listings: </Typography>

            <Stack spacing={0.7}>
              {/* Title */}
              <TextField 
                name="searchtitle"
                variant="outlined"
                label="Search By Title"
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyPress}
              />

              {/* Parking */}
              <Autocomplete
                disablePortal
                fullWidth
                loading
                options={['Available', 'Not Available', 'Undecided']}
                onChange={(event, newParking) => {
                  setParking(newParking);
                }}
                renderInput={(params) => <TextField {...params} label="Parking" />}
              />

              {/* Room Type */}
              <Autocomplete
                disablePortal
                fullWidth
                loading
                options={['Single', 'Shared', 'Entire Apartment']}
                onChange={(event, newRoomType) => {
                  setRoomType(newRoomType);
                }}
                renderInput={(params) => <TextField {...params} label="Room Type" />}
              />


              {/* Lease Type */}
              <Autocomplete
                disablePortal
                fullWidth
                loading
                options={['Monthly', 'Long-Term', 'Flexible']}
                onChange={(event, newLeaseType) => {
                  setLeaseType(newLeaseType);
                }}
                renderInput={(params) => <TextField {...params} label="Lease Type" />}
              />

            </Stack>
            
            <Button onClick={searchPost} color="primary" variant="contained" fullWidth >Search</Button>
        </Paper>)
};

export default SearchApartments;