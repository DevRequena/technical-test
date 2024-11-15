import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import IconButtonImage from '../../../components/Icon/IconButton';

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalData = data?.length;

  const nextCard = () => {
    if (currentIndex < totalData - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const getCardIndex = (index) => (index + totalData) % totalData;

  return (
    <Box
      sx={{
        width: '100%',
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%',
      }}
    >
      <Box sx={{ width: '83%', height: '100%', display: 'flex', alignItems: 'center' }}>
        <Button sx={{ height: '50px' }} onClick={prevCard} disabled={currentIndex === 0}>
          <IconButtonImage rotate={'180deg'} backgroundColor={currentIndex === 0 && 'grey'} />
        </Button>

        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {data &&
            data.map((item, index) => {
              const offset = getCardIndex(index - currentIndex);
              const isCenter = offset === 0;
              const isLeft = offset === totalData - 1;
              const isRight = offset === 1;

              return (
                <Box
                  key={index}
                  sx={{
                    position: 'absolute',
                    transition: 'all 0.5s ease-in-out',
                    transform: `translateX(${isLeft ? '-55%' : isRight ? '55%' : '0'}) scale(${
                      isCenter ? 1 : 0.8
                    })`,
                    zIndex: isCenter ? 20 : 10,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '16px',
                      width: '27.5rem',
                      height: '14rem',
                      backgroundColor: isCenter ? '#4A90E2' : '#FF4C4C', // Color central y lateral
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderRadius: '14px',
                      padding: '32px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                      aspectRatio: '16/9',
                    }}
                  >
                    <img
                      src={item.elemento}
                      alt={item.nombre}
                      style={{ width: '80px', height: '80px', borderRadius: '50%' }}
                    />
                    <h4
                      style={{
                        fontFamily: 'Open Sans',
                        fontWeight: '400',
                        color: '#D1D1D1',
                        fontSize: '18px',
                      }}
                    >
                      {item.nombre + ' ' + item.nombre}
                    </h4>
                    <p
                      style={{
                        fontFamily: 'Open Sans',
                        fontWeight: '400',
                        color: '#D1D1D1',
                        textAlign: 'center',
                      }}
                    >
                      {
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic sequi blanditiis fugiat? Amet, sit illum recusandae beatae vero quibusdam'
                      }
                    </p>
                  </Box>
                </Box>
              );
            })}
        </Box>

        <Button sx={{ height: '50px' }} onClick={nextCard} disabled={currentIndex === totalData - 1}>
          <IconButtonImage backgroundColor={currentIndex === totalData - 1 && 'grey'} />
        </Button>
      </Box>
    </Box>
  );
};

export default Carousel;
