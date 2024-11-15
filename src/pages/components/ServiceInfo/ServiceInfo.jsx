import { Box, Typography } from '@mui/material'
import React from 'react'
import TextFieldButton from '../../../components/TextFieldButton/TextFieldButton'

export const ServiceInfo = () => {
  return (
    <Box
    sx={{
      width: '40%',
      textAlign: 'start'
    }}
  >
    <Typography sx={{ fontFamily: 'SegoeUI-Bold', fontSize: '40px', color: '#FF6752' }}>
      Our Services
    </Typography>
    <Typography sx={{ fontFamily: 'OpenSans-Regular', color: '#808080', fontSize: '16px', marginTop: '20px', width: '80%' }}>
      National Brand With a Local Feel. Experience the Fetch! Difference
    </Typography>
    <Typography sx={{ fontFamily: 'SegoeUI-Bold', color: '#FF6752', fontSize: '16px', marginTop: '20px' }}>
      Enter Your Location and Fetch Our Services
    </Typography>
    <TextFieldButton placeholder='Zip Code' sx={{ width: '200px', marginTop: '3%' }} />

  </Box>
  )
}
