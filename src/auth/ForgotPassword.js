import React, { useState } from 'react';
import { Box, Typography, Input, Button, Link, Modal } from '@mui/joy';

const ForgotPasswordModal = ({ open, onClose }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleResetPassword = () => {
    // Add your logic to send the reset password instructions here
    console.log('Resetting password for:', email);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="forgot-password-modal-title"
      aria-describedby="forgot-password-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: "#fefeff",
          boxShadow: 1,
          borderRadius: 5,
          p: 4,
          maxWidth: 500,
          width: '100%',
        }}
      >
        <Typography id="forgot-password-modal-title" variant="h5" component="h1" gutterBottom sx={{
          fontSize: '35px',
          fontWeight: '500'
        }}>
          Forgot your password?
        </Typography>
        <Typography id="forgot-password-modal-description" variant="body1" gutterBottom>
          No worries, we'll send you reset instructions.
        </Typography>
        <Input
          label="Email"
          variant="outlined"
          placeholder='e.g.jhondoe13@gmail.com'
          value={email}
          onChange={handleEmailChange}
          margin="normal"
          fullWidth
          sx={{
            paddingTop: '13px',
            paddingBottom: '13px'
          }}
        />
        <Button
          variant="contained"

          onClick={handleResetPassword}
          fullWidth
          sx={{ mt: 2, bgcolor: "#0b6bcb", color: '#fefeff', fontSize: '15px', padding: '10px' }}
        >
          Reset password
        </Button>
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          Go back to the
          <Link href="#" onClick={onClose} variant="body2" sx={{ marginLeft: '5px', fontWeight: "500" }}>
            Login page
          </Link>
        </Box>
      </Box>
    </Modal>
  );
};

export default ForgotPasswordModal;
