import React from 'react';
import { Box, Card, CardContent, Typography, SvgIcon } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

type BalanceCardProps = {
  totalBalance: number;
  income: number;
  expenses: number;
};

const BalanceCard: React.FC<BalanceCardProps> = ({ totalBalance, income, expenses }) => {
  return (
    <Card sx={{
      maxWidth: 345,
      borderRadius: '20px',
      background: '#243A72',
      color: 'white',
    }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, paddingTop: 2}} gutterBottom>
          Total Balance
          <SvgIcon component={ArrowUpwardIcon} inheritViewBox sx={{ transform: 'scale(0.8)', verticalAlign: 'middle', marginLeft: '5px' }} />
        </Typography>
        <Typography variant="h5" component="div">
          ${totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', paddingBottom: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SvgIcon component={ArrowDownwardIcon} inheritViewBox sx={{ transform: 'scale(0.8)', verticalAlign: 'middle', marginRight: '5px' }} />
            <Typography sx={{ fontSize: 14 }}>
              Income
            </Typography>
            <Typography sx={{ fontSize: 14, marginLeft: '5px' }}>
              ${income.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SvgIcon component={ArrowUpwardIcon} inheritViewBox sx={{ transform: 'scale(0.8)', verticalAlign: 'middle', marginRight: '5px' }} />
            <Typography sx={{ fontSize: 14 }}>
              Expenses
            </Typography>
            <Typography sx={{ fontSize: 14, marginLeft: '5px' }}>
              ${expenses.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BalanceCard;
