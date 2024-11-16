import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
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
        width: '70%',
        minWidth: '900px',
        height: '350px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
        <Button sx={{ height: '50px' }} onClick={prevCard} disabled={currentIndex === 0}>
          <IconButtonImage rotate={'180deg'} disabled={currentIndex === 0 } />
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
                      isCenter ? 1.1 : 0.89
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
                      gap: '10px',
                      width: '100%',
                      height: '14rem',
                      backgroundColor: isCenter ? '#FC6844' : '#4587FE',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderRadius: '14px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                      aspectRatio: '16/9',
                      padding: '2px',
                    }}
                  >
                    <img
                      src={item.avatar}
                      alt={item.nombre}
                      style={{ width: '70px', height: '70px', borderRadius: '50%' }}
                    />
                    <h4
                      style={{
                        fontFamily: 'Open Sans',
                        fontWeight: '400',
                        color: '#D1D1D1',
                        fontSize: '18px',
                        fontFamily: 'OpenSans-Bold',
                      }}
                    >
                      {item.first_name + ' ' + item.last_name}
                    </h4>
                    <Typography
                      sx={{
                        fontFamily: 'OpenSans-Regular',
                        fontSize: '14px',
                        fontWeight: '100',
                        color: '#D1D1D1',
                        textAlign: 'center',
                        width: '90%',
                        lineHeight: '20px',
                      }}
                    >
                      {
                        '" I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing"'
                      }
                    </Typography>
                  </Box>
                </Box>
              );
            })}
        </Box>

        <Button sx={{ height: '50px' }} onClick={nextCard} disabled={currentIndex === totalData - 1}>
          <IconButtonImage disabled={currentIndex === totalData - 1} />
        </Button>
      </Box>
  );
};

export default Carousel;
