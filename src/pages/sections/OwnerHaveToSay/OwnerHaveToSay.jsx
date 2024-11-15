import React from 'react';
import { Box, Typography } from '@mui/material';
import TextFieldButton from '../../../components/TextFieldButton/TextFieldButton';
import Carousel from './Carousel';
// import useGetUsers from './hook/useGetUsers';
import api from '../../../utils/api'

const data = [
  {
    nombre: "Carlos Sánchez",
    elemento: "/assets/petCaeWave",
    dirección: "Calle Sol, 123"
  },
  {
    nombre: "Ana López",
    elemento: "Agua",
    dirección: "Avenida Mar, 456"
  },
  {
    nombre: "Pedro Martínez",
    elemento: "Tierra",
    dirección: "Camino Verde, 789"
  },
  {
    nombre: "Lucía Torres",
    elemento: "Aire",
    dirección: "Plaza Viento, 101"
  },
  {
    nombre: "Miguel Fernández",
    elemento: "Éter",
    dirección: "Paseo Estrella, 202"
  }
];


export const OwnerHaveToSay = () => {
  

  return (
    <Box sx={{ width: '100%', display: 'flex', marginBottom: '30%', justifyContent: 'center', position: 'relative' }}>

      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          width: '100%',
          height: '400px',
          minWidth: '600px',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
        >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
        <Typography sx={{ fontFamily: 'SegoeUI-Bold', fontSize: '35px', color: '#FF6752', width: '550px', alignSelf: 'center'}}>
          Here's what pet owners have to say about Fetch! Pet Care...
        </Typography>
        </Box>
        <Carousel data={data}/>

      </Box>
    </Box>
  );
};
