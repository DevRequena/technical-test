import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        backgroundColor: '#F8F9FA',
        padding: '0 20px',
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '8rem', fontWeight: 'bold', color: '#FF6B6B' }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '1rem', marginBottom: '2rem', color: '#777' }}>
        The page you’re looking for doesn’t exist. It may have been moved or deleted.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{
          backgroundColor: '#4083FA',
          color: '#FFFFFF',
          padding: '10px 20px',
          textTransform: 'none',
          fontSize: '1rem',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: '#3367D6',
          },
        }}
      >
        Go Back Home
      </Button>
    </Box>
  );
};

export default Error404;
