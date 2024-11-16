import React from 'react'
import { Nav } from './components/Nav/LayoutNav'
import { Footer } from './components/Footer/LayoutFooter'
import { Box } from '@mui/material'

export const MainLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#F3F6FB'
      }}
    >
      <Nav />
      
      <Box
        sx={{
          flex: 1,
          zIndex: 10,
        }}
      >
        {children}
      </Box>
      
      <Footer />
    </Box>
  )
}