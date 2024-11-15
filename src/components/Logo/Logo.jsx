import { Box } from "@mui/material";

export default function Logo({ height, width, style }) {


  return (

    <Box
      bgcolor='#f8f9fa'
      sx={{ borderRadius: '50%', padding: '1%', height, width, ...style }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <img src={`/assets/pet.svg`} alt="Logo" style={{ width: '75%', margin: '2%' }} />
    </Box>

  );
}
