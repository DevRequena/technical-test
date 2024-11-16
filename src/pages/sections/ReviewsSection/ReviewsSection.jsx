import React from 'react';
import { Box, Typography } from '@mui/material';
import Carousel from './Carousel';
import useGetUsers from './hook/useGetUsers';

export const ReviewsSection = ({ title }) => {
  const { data, isLoading, isError } = useGetUsers();

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '-200px',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          width: '100%',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', 
        }}
      >
        <Typography
          sx={{
            fontFamily: 'SegoeUI-Bold',
            fontSize: '35px',
            color: '#FF6752',
            textAlign: 'center',
            marginBottom: '2rem',
            maxWidth: '50%',
          }}
        >
          {title}
        </Typography>
        <Carousel data={data?.data} />
      </Box>
    </Box>
  );
};
