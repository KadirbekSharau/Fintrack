// TransactionsList.tsx
import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

type TransactionItem = {
  title: string;
  date: string;
  amount: number;
};

type TransactionsListProps = {
  items: TransactionItem[];
};

const TransactionsList: React.FC<TransactionsListProps> = ({ items }) => {
    return (
      <Box sx={{ maxHeight: '400px', overflowY: 'auto' }}> 
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {items.map((item, index) => (
            <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="subtitle1">{item.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.date}
                </Typography>
              </Box>
              <Typography variant="subtitle1" color={item.amount >= 0 ? 'green' : 'red'}>
                {item.amount.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };
  
  export default TransactionsList;