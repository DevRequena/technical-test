import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';
import IconButtonImage from '../Icon/IconButton';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '50px',
    backgroundColor: '#FFFFFF',
    paddingRight: 0,
  },
}));

export default function TextFieldButton({ placeholder = '', route = '#', sx = {} }) {
  return (
    <StyledTextField
      placeholder={placeholder}
      variant="outlined"
      sx={sx}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButtonImage route={route} />
          </InputAdornment>
        ),
      }}
    />
  );
}