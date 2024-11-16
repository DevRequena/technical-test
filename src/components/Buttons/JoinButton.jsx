import React from 'react';
import { Button } from '@mui/material';

const GeneralButton = ({label, width, height, fontSize}) => {
  return (
    <Button
      type="submit"
      variant="contained"
      sx={{
        width: width,
        height: height,
        borderRadius: '50px',
        backgroundColor: '#F8F8F8',
        boxShadow: '0px 3px 6px #2C1DAD29',
        color: '#FE6845', // Color inicial de las letras
        '&:hover': {
          backgroundColor: '#FE6845',
          color: '#FFFFFF', // Color de las letras en hover
        },
        fontSize: fontSize,
        fontFamily: 'OpenSans-Bold',
        textTransform: 'none',
      }}
    >
      {label}
    </Button>
  );
};

export default GeneralButton;
