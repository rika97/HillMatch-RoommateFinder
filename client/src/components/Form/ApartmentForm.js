import React, { useState, useEffect } from 'react';
import { TextField, Typography, Paper, Button, Stack, Autocomplete } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createPost, updatePost } from '../../actions/posts';

const ApartmentForm = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: '', description: '', selectedFile: '', parking: '', roomType: '', leaseType: '', rentPrice: '', utilitiesPrice: '', travelTime: ''
  });
  const [parking, setParking] = useState('');
  const [roomType, setRoomType] = useState('');
  const [leaseType, setLeaseType] = useState('');
  const [rentPrice, setRentPrice] = useState('');
  const [utilitiesPrice, setUtilitiesPrice] = useState('');
  const [travelTime, setTravelTime] = useState('');

  const post = useSelector((state) => (currentId ? state.posts.posts.find((description) => description._id === currentId) : null));
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (!post?.title) clear();
    if(post) setPostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(currentId) {
      dispatch(updatePost(currentId, {...postData, userName: user?.result?.userName, parking: parking, roomType: roomType, leaseType: leaseType, rentPrice: rentPrice, utilitiesPrice: utilitiesPrice, travelTime: travelTime }));
      clear();
    } else {
      dispatch(createPost({...postData, userName: user?.result?.userName, parking: parking, roomType: roomType, leaseType: leaseType, rentPrice: rentPrice, utilitiesPrice: utilitiesPrice, travelTime: travelTime }));
      clear();
    }
  };

  if(!user?.result?.name) {
    return (
      <Paper>
        <Typography variant="h6" align="center">
          Please Sign In to use Toku.
        </Typography>
      </Paper>
    );
  }

  const clear = () => {
    setCurrentId(null);
    setPostData({ title: '', description: '', selectedFile: '', parking: '', roomType: '', leaseType: '', rentPrice: '', utilitiesPrice: '', travelTime: ''});
  };


  return (
    <Paper>
      <form autoComplete='off' noValidate onSubmit={handleSubmit}>
      {/* Title */}
      <Typography variant="h6" align="center">{currentId ? 'Edit' : 'Add a new'} listing:</Typography>
      <Stack spacing={0.7}>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth 
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />


        {/* Description */}
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth 
          multiline
          rows={6}
          value={postData.description}
          onChange={(e) => setPostData({ ...postData, description: e.target.value })}
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


        {/* Rent Price */}
        <TextField
          name="rentPrice"
          variant="outlined"
          label="Rent Price (USD)"
          fullWidth
          value={postData.rentPrice}
          onChange={(e) => setPostData({ ...postData, rentPrice: e.target.value })}
        />

        {/* Utilities Price */}
        <TextField
          name="utilitiesPrice"
          variant="outlined"
          label="Utilities Price (USD)"
          fullWidth
          value={postData.utilitiesPrice}
          onChange={(e) => setPostData({ ...postData, utilitiesPrice: e.target.value })}
        />

        {/* Travel Time */}
        <TextField
          name="travelTime"
          variant="outlined"
          label="Time to Campus (mins)"
          fullWidth
          value={postData.travelTime}
          onChange={(e) => setPostData({ ...postData, travelTime: e.target.value })}
        />

        {/* Image */}
        <div>
          <Typography variant="h7">Add image: </Typography>
          <FileBase 
            type="file"
            multiple={false}
            onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
          />
        </div>
      </Stack>

      <Button variant="contained" color="primary" size="large" type="submit" fullWidth sx={{mt: 1}}>Submit</Button>
      <Button variant="contained" color="error" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default ApartmentForm;