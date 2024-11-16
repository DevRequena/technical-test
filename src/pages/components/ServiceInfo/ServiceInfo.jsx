import { Box, Typography } from '@mui/material'
import React from 'react'
import TextFieldButton from '../../../components/TextFieldButton/TextFieldButton'

export const ServiceInfo = ({width, textAlign, title, subTitle, info, placeholder}) => {
  return (
    <Box
    sx={{
      width: width,
      textAlign: textAlign
    }}
  >
    <Typography sx={{ fontFamily: 'SegoeUI-Bold', fontSize: '40px', color: '#FF6752' }}>
      {title}
    </Typography>
    <Typography sx={{ fontFamily: 'OpenSans-Regular', color: '#808080', fontSize: '16px', marginTop: '20px', width: '80%' }}>
      {subTitle}
    </Typography>
    <Typography sx={{ fontFamily: 'SegoeUI-Bold', color: '#FF6752', fontSize: '16px', marginTop: '20px' }}>
      {info}
    </Typography>
    <TextFieldButton placeholder={placeholder} sx={{ width: '200px', marginTop: '3%' }} />

  </Box>
  )
}
