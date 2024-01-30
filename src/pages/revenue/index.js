import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';

export default function AvatarButtons() {
  const [variant1, setVariant1] = React.useState('contained');
  const [variant2, setVariant2] = React.useState('outlined');

  const handleClick = () => {
    // Toggle variants
    setVariant1((prevVariant) => (prevVariant === 'contained' ? 'outlined' : 'contained'));
    setVariant2((prevVariant) => (prevVariant === 'contained' ? 'outlined' : 'contained'));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
      }}
    >
      <Stack direction="row" spacing={5}>
        <Button variant={variant1} startIcon={<img alt="Natacha" src="/images/moneyIcon.png" width='40px' />} onClick={handleClick} sx={{ width: '200px', height: '100px', fontSize: '25px' }}>
          Income
        </Button>
        <Button variant={variant2} startIcon={<img alt="Natacha" src="/images/profitIcon.png" width='40px' />} onClick={handleClick} sx={{ width: '200px', height: '100px', fontSize: '25px' }}>
          Profit
        </Button>
      </Stack>
    </Box>
  );
}
