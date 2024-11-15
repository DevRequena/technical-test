import React from 'react';
import { Button } from '@mui/material';

const GeneralButton = ({ isSubmitting = false, fontWeight = 'bold', label, fontSize = '16px', width = '200px', height = '65px', color = '#4487FF', hoverBackgroundColor = '#357ae8', sx={} }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      disabled={isSubmitting}
      sx={{
        width: width,
        height: height,
        borderRadius: '50px',
        backgroundColor: color,
        boxShadow: '0px 3px 6px #2C1DAD29',
        '&:hover': {
          backgroundColor: hoverBackgroundColor,
        },
        fontSize: fontSize,
        fontFamily: 'OpenSans-Bold',
        fontWeight: fontWeight,
        textTransform: 'none',
        ...sx,
      }}
    >
      {isSubmitting ? 'Cargando...' : label}
    </Button>
  );
};

export default GeneralButton;