import { Box, Typography } from '@mui/material';
import JoinButton from '../../../components/Buttons/JoinButton';
import React from 'react';

export const CalltoActionSection = ({ title, description, buttonLabel }) => {
  return (
    <Box
      sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
    >
      <Box
        sx={{
          backgroundColor: '#4083FA',
          width: '75%',
          height: '100%',
          marginTop: '-17%',
          borderRadius: '15px',
          marginBottom: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src='/assets/dogYellowCircleFooter.png' width='260px' height='280px' alt="Dog with Yellow Circle" />

        <Box sx={{ width: '62%', padding: '2%' }}>
          <Typography sx={{ color: '#FFE530', fontFamily: 'Comfortaa-Bold', marginBottom: '3%', fontSize: '40px' }}>
            {title}
          </Typography>
          <Typography sx={{ color: '#F8F8F8', fontFamily: 'OpenSans-Regular', marginBottom: '3%', fontSize: '20px' }}>
            {description}
          </Typography>
          <JoinButton label={buttonLabel} width='130px' height='55px' fontSize='16px' />
        </Box>
      </Box>
    </Box>
  );
};
