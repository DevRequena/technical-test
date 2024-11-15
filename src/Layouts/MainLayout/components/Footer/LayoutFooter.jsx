import { Box, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import { About, Others, Resources } from './utils/ListTitle'
import TextFieldButton from '../../../../components/TextFieldButton/TextFieldButton'

export const Footer = () => {


  const styleBoxInfo = {
    flex: '1 1 22%',
    minWidth: '200px',
    height: '180px',
    marginBottom: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const styleTitleSectionFooter = {
    fontSize: '15px',
    marginBottom: 1.5,
    fontFamily: 'SegoeUI-Regular',
  }

  const title = {
    color: '#FFFFFF',
    fontFamily: 'SegoeUI-Regular',
    fontSize: '15px',
    fontWeight: 100
  }


  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        width: '100%',
      }}
    >
      <Box
        component="img"
        src='/assets/footerWave.png'
        alt="Footer Background"
        sx={{
          width: '100%',
          height: '330px',
          position: 'absolute',
          bottom: 0,
          zIndex: -1,
        }}
        />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          width: '100%',
          padding: 2,

        }}
      >

        <Box sx={styleBoxInfo}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <Typography fontWeight='bold' color='#FFE530' sx={styleTitleSectionFooter}>About</Typography>
            <Stack spacing={1.5}>
              {
                About.map(element => {
                  return (
                    <Link key={element} href="#" underline='none' sx={title}>{element}</Link>
                  )
                })
              }
            </Stack>
          </Box>
        </Box>

        <Box sx={styleBoxInfo}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <Typography fontWeight='bold' color='#FFE530' sx={styleTitleSectionFooter}>Resources</Typography>
            <Stack spacing={1.5}>
              {
                Resources.map(element => {
                  return (
                    <Link key={element} href="#" underline='none' sx={title}>{element}</Link>
                  )
                })
              }
            </Stack>
          </Box>
        </Box>

        <Box sx={styleBoxInfo}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <Stack spacing={1.5} sx={{marginTop: '33px'}}>
              {
                Others.map(element => {
                  return (
                    <Link key={element} href="#" underline='none' sx={title}>{element}</Link>
                  )
                })
              }
            </Stack>
          </Box>
        </Box>

        <Box sx={{ flex: '1 1 22%', minWidth: '200px', height: '180px', marginBottom: 2, display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center'}}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <Typography fontWeight='bold' color='#FFE530' sx={{ marginBottom: 1 }}>NewsLetter</Typography>
            <Stack spacing={1.5}>
              <Typography width={'70%'} sx={title}>Sign up to receive the Fetch! Family Newsletter</Typography>
              <TextFieldButton placeholder='Email Adress' route={'#'} sx={{width: '250px'}}/>

            </Stack>
          </Box>
        </Box>

      </Box>

    </Box>
  )
}
