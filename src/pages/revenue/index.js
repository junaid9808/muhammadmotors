import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import IncomeTable from 'src/views/form-layouts/IncomeTable';
import ProfitTable from 'src/views/form-layouts/ProfitTable';


export default function AvatarButtons() {
  const [selected, setSelected] = React.useState(null);
  const [isShowIncome, setIsShowIncome] = React.useState(false);
  const [isShowProfit, setIsShowProfit] = React.useState(false);


  const handleButtonClick = (item) => {
    setSelected(item);
    if (item === 'income') {
      setIsShowIncome(true);
      setIsShowProfit(false);
    } else if (item === 'profit') {
      setIsShowProfit(true);
      setIsShowIncome(false); 
    }
  };

  return (
    <>
    {isShowIncome ? (
        <IncomeTable/>
    ) : isShowProfit ? (
        <ProfitTable/>
    ) :
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
      }}
    >
      <Stack direction="row" spacing={5}>
        <Button
          variant={selected === 'income' ? 'contained' : 'outlined'}
          startIcon={<img alt="moneyicon" src="/images/moneyIcon.png" width='40px' />}
          onClick={() => handleButtonClick('income')}
          sx={{ width: '200px', height: '100px', fontSize: '25px' }}
        >
          Income
        </Button>
        <Button
          variant={selected === 'profit' ? 'contained' : 'outlined'}
          startIcon={<img alt="profiticon" src="/images/profitIcon.png" width='40px' />}
          onClick={() => handleButtonClick('profit')}
          sx={{ width: '200px', height: '100px', fontSize: '25px' }}
        >
          Profit
        </Button>
      </Stack>
    </Box>
    } </>
  )
}
