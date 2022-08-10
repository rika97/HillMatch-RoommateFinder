import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Grid, Button, Box, Modal } from '@mui/material';

const SurveyModal = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const [openModal, setOpenModal] = useState(user.result.survey.length === 0);
    const handleClose = () => setOpenModal(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid rgba(0,0,0,.333)',
        boxShadow: 24,
        p: 4,
        borderRadius: '8px'
      };

  return (
    <div>
        {/* Pop-up */}
        <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Welcome to HillMatch!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Take the roommate survey to continue.
            </Typography>
            {/* Buttons */}
            <Grid container sx={{mt: 2}}>
            <Button color="secondary" variant="contained" onClick={handleClose}>
                Continue
            </Button>
            </Grid>
        </Box>
        </Modal>
    </div>
  )
}

export default SurveyModal;
