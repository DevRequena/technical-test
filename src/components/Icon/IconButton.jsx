import React from 'react';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'backgroundColor',
})(({ backgroundColor = "#FF6F61", theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: backgroundColor,
  color: '#FFFFFF',
  borderRadius: '50%',
  padding: '10px',
  margin: '5px',
  '&:hover': {
    backgroundColor: `${backgroundColor}CC`,
  },
  boxShadow: '2px 3px 4px #00000029',
  '&.Mui-disabled': {
    backgroundColor: 'grey',
    color: '#FFFFFF',
    opacity: 0.6,
  },
}));

export default function IconButtonImage({ route, rotate, backgroundColor = '#FC6844', disabled = false }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!disabled && route) {
      navigate(route);
    }
  };

  return (
    <StyledIconButton
      onClick={handleClick}
      backgroundColor={backgroundColor}
      disabled={disabled}
    >
      <img
        src="/assets/arrowButton.svg"
        alt="icon"
        style={{ width: '25px', transform: rotate ? `rotate(${rotate})` : 'none' }}
      />
    </StyledIconButton>
  );
}
