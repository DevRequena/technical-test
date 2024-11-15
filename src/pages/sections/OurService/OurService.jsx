import React from 'react';
import { Box } from '@mui/material';
import ServiceCardComponent from './ServiceCardComponent';
import { ServiceInfo } from '../../components/ServiceInfo/ServiceInfo';

export const OurService = () => {
  return (
    <Box sx={{ width: '100%', marginTop: '-7%', display: 'flex', justifyContent: 'center', position: 'relative' }}>
      <Box
        component="img"
        src="/assets/blueWave.png"
        alt="Background"
        sx={{
          width: '100%',
          height: 'auto',
          display: 'block',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          width: '70%',
          height: '500px',
          minWidth: '600px',
        }}
      >
        <Box
          sx={{
            width: '100%',
            justifyContent: 'space-between',
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <ServiceInfo/>
          <Box
            sx={{
              width: '40%',
              textAlign: 'end',
              marginTop: '-2%'

            }}
          >
            <Box
              sx={{
                width: '100%', display: 'flex', gap: '15px', marginBottom: '15px'
              }}
            >
              <ServiceCardComponent label='Dog Walking' icon='/icons/dog.svg' />
              <ServiceCardComponent label='Pet Sitting' icon='/icons/cat.svg'/>
            </Box>
            <Box
              sx={{
                width: '100%', display: 'flex', gap: '15px'
              }}
            >
              <ServiceCardComponent label='Overnight Care' icon='/icons/house.svg'/>
              <ServiceCardComponent label='Other Services'icon='/icons/footprint.svg'/>
            </Box>


          </Box>

        </Box>
      </Box>
    </Box>
  );
};
