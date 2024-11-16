import React from 'react';
import { Box } from '@mui/material';
import { ServiceInfo } from '../../components/ServiceInfo/ServiceInfo';
import ServiceCardComponent from '../../components/Card/ServiceCardComponent';

export const ServiceWorkflow = ({ title, subTitle, info, placeholder }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '1100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          height: '100%',
          top: '50%',
          right: '-35%',
          transform: 'translateY(-50%)',
        }}
      >
        <img src='/assets/yellowCircle.png' style={{ width: '900px' }} alt="Yellow Circle" />
      </Box>

      <Box
        sx={{
          width: '90%',
          marginBottom: '30%',
          justifyContent: 'space-between',
          display: 'flex',
          flexDirection: 'row',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <Box sx={{ position: 'relative', width: '50%' }}>
          <img
            src='/assets/orangeLine.png'
            alt="Orange Line"
            style={{
              position: 'absolute',
              top: '65%',
              left: '65%',
              transform: 'translate(-50%, -50%)',
              width: '250px',
              height: '400px',
            }}
          />
          <ServiceCardComponent icon='/icons/kid.svg' label='Match' isRelative={true} top='50%' left='65%' />
          <ServiceCardComponent icon='/icons/calendar.svg' label='Reserve' isRelative={true} top='-15%' left='20%' />
          <ServiceCardComponent icon='/icons/pet.svg' label='Relax' isRelative={true} top='15%' left='20%' />

          <img
            src='/assets/yellowCircle.png'
            alt="Orange Line"
            style={{
              position: 'absolute',
              bottom: '-75%',
              right: '90%',
              width: '300px',
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'end', marginTop: '5%', marginRight: '5%' }}>
          <ServiceInfo
            title={title}
            subTitle={subTitle}
            info={info}
            width='80%'
            placeholder={placeholder}
          />
        </Box>
      </Box>
    </Box>
  );
};
