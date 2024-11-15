import { Box, Stack, Typography, Link } from '@mui/material';
import React from 'react';
import useAuthStore from '../../../../auth/authStore';
import Logo from '../../../../components/Logo/logo';

export const Nav = () => {
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  const styledTypography = {
    color: '#FFFFFF',
    fontSize: '15px',
    fontFamily: 'OpenSans-Regular',
  };

  return (
    <Box sx={{ position: 'relative', zIndex: 10, height: '100vh' }}>
      <Box
        component="img"
        src="/assets/navWave.png"
        alt="Header Background"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: -1,
        }}
      />
      
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 4,
          py: 2,
        }}
      >
        <Logo height="50px" width="50px" />
        
        <Stack
          direction="row"
          spacing={3}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          {['Location', 'Blog', 'Services', 'About Us', 'Franchise With Us'].map(
            (label, index) => (
              <Link
                key={index}
                href={`/${label.toLowerCase().replace(/\s/g, '-')}`}
                variant="body2"
                color="inherit"
                underline="none"
                sx={{ cursor: 'pointer' }}
              >
                <Typography sx={styledTypography}>{label}</Typography>
              </Link>
            )
          )}
          
          <Link
            onClick={handleLogout}
            variant="body2"
            color="inherit"
            underline="none"
            sx={{ cursor: 'pointer', textTransform: 'none', borderRadius: '10px' }}
          >
            <Typography sx={styledTypography}>Logout</Typography>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};
