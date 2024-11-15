import React from 'react';
import { Box, Typography } from '@mui/material';

const ServiceCardComponent = ({ icon, label = 'Other Services' }) => {
  return (
    <Box
      sx={{
        width: 150,
        height: 150,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: '15px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        padding: 2,
      }}
    >
      <Box
        component="img"
        src={icon}
        alt={label}
        sx={{
          width: 50,
          height: 50,
          marginBottom: 1,
        }}
      />
      
      <Typography variant="body1" sx={{ color: '#757575', marginTop: 1 }}>
        {label}
      </Typography>
    </Box>
  );
};

export default ServiceCardComponent;
