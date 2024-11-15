import React from 'react';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const StyledIconButton = styled(IconButton)(({ bgColor }) => ({
  display: 'flex',
  alignItems: 'end',
  backgroundColor: bgColor || '#FF6F61',
  color: '#FFFFFF',
  borderRadius: '50%',
  padding: '10px',
  margin: '5px',
  '&:hover': {
    backgroundColor: bgColor ? `${bgColor}CC` : '#FF4F41',
  },
  boxShadow: '2px 3px 4px #00000029',
}));

export default function IconButtonImage({ route, rotate, backgroundColor }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <StyledIconButton onClick={handleClick} bgColor={backgroundColor}>
      <img
        src='/assets/arrowButton.svg'
        alt="icon"
        style={{ width: '25px', transform: rotate ? `rotate(${rotate})` : 'none' }}
      />
    </StyledIconButton>
  );
}