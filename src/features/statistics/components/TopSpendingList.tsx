import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';

const TopSpendingList = () => {
  const spendings = [
    { name: 'Starbucks', date: 'Jan 12, 2022', amount: '-$150.00' },
    { name: 'Transfer', date: 'Yesterday', amount: '-$85.00' },
    { name: 'Youtube', date: 'Jan 16, 2022', amount: '-$11.99' },
    // ... add more items here
  ];

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper', margin: 2 }}>
      {spendings.map((spending, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: spending.amount.startsWith('-') ? 'red' : 'green' }}>
              {/* Icon based on the name or category */}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={spending.name} secondary={spending.date} />
          <ListItemText primary={spending.amount} sx={{ textAlign: 'right' }} />
        </ListItem>
      ))}
    </List>
  );
};

export default TopSpendingList;
