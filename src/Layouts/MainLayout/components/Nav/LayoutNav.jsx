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

  const links = [
    { label: 'Location', href: '/app/location' },
    { label: 'Blog', href: '/app/blog' },
    { label: 'Services', href: '/app/services' },
    { label: 'About Us', href: '/app/about-us' },
    { label: 'Franchise With Us', href: '/app/franchise-with-us' },
  ];

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
          px: 6,
          py: 3,
        }}
      >
        <Link sx={{ cursor: 'pointer' }} href={'/app/home'}>
          <Logo height="100px" width="100px" />
        </Link>
        
        <Box
          direction="row"
          spacing={3}
          sx={{ display: 'flex', alignItems: 'start', gap: '15px', justifyContent: 'center', height: '100px' }}
        >
          {links.map(({ label, href }, index) => (
            <Link
              key={index}
              href={href}
              variant="body2"
              color="inherit"
              underline="none"
              sx={{ cursor: 'pointer' }}
            >
              <Typography sx={styledTypography}>{label}</Typography>
            </Link>
          ))}
          
          <Link
            onClick={handleLogout}
            variant="body2"
            color="inherit"
            underline="none"
            sx={{ cursor: 'pointer', textTransform: 'none', borderRadius: '10px' }}
          >
            <Typography sx={styledTypography}>Logout</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
