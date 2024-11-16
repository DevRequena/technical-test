import React from 'react'
import { Box, Typography } from '@mui/material'
import GeneralButton from '../../../components/Buttons/GeneralButton'

export const IntroSection = ({title, subTitle, info, buttonTitle}) => {
  return (
    <Box sx={{ marginTop: '-80vh', width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ width: '90%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ width: '50%' }}>
          <Typography sx={{ fontFamily: 'MuseoSansRounded700', color: '#FFFFFF', fontSize: '58px' }}>{title}</Typography>
          <Typography sx={{ fontFamily: 'OpenSans-Regular', fontSize: '16px', width: '70%', color: '#FFFFFF' }}>{subTitle}</Typography>

          <Box sx={{ display: 'flex', width: '60%', marginTop: '30px', justifyContent: 'space-around', alignItems: 'center' }}>
            <GeneralButton sx={{width:'180px', height:'55px', fontWeight:'normal', fontSize:'14px'}} label={buttonTitle} />
            <Typography sx={{fontSize: '14px', color: '#FFFFFF' }}>{info}</Typography>
          </Box>
        </Box>

        <img src='/assets/dogYellowCircle.png' />

      </Box>


    </Box>
  )
}
