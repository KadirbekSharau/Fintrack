// // Dashboard.tsx
// import React from 'react';
// import { Box, Typography, Container, CircularProgress } from '@mui/material';
// import BalanceCard from './BalanceCard';
// import BackgroundShape from '~/components/BackgroundShape/BackgroundShape';
// import TransactionsList from './TransactionsList';
// import { useGetBalanceSummaryQuery, useGetTransactionsQuery } from '~/api/transactions/api';

// const Dashboard = () => {
//   const { data: balanceSummary, error: balanceError, isLoading: balanceIsLoading } = useGetBalanceSummaryQuery();
//   const { data: transactionsData, error: transactionsError, isLoading: transactionsIsLoading } = useGetTransactionsQuery();

//   if (balanceIsLoading || transactionsIsLoading) return <CircularProgress />;
//   if (balanceError || transactionsError) return <div>Error!</div>;

//   // Deconstruct the necessary fields from the balance summary
//   const { balance, total_income, total_outcome } = balanceSummary || {};

//   return (
//     <Box sx={{ position: 'relative', flexGrow: 1 }}>
//       <BackgroundShape />
//       <Container sx={{ position: 'relative', zIndex: 1, mt: 4, mb: 4 }}>
//         <Box sx={{ mt: 2 }}>
//           {/* Pass the balance summary data to the BalanceCard */}
//           <BalanceCard totalBalance={balance} income={total_income} expenses={total_outcome} />
//         </Box>
//         <Box sx={{ mt: 5 }}>
//           <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
//             Transactions History
//           </Typography>
//           {/* Pass the transactions list data to the TransactionsList */}
//           <TransactionsList items={transactionsData || []} />
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Dashboard;


// Dashboard.tsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { UserData } from '../types';
import BalanceCard from './BalanceCard';
import BackgroundShape from '~/components/BackgroundShape/BackgroundShape';
import TransactionsList from './TransactionsList';

interface DashboardProps {
  userData: UserData;
}

const Dashboard: React.FC<DashboardProps> = ({ userData }) => {
  const balanceData = {
    totalBalance: 2548.0,
    income: 1840.0,
    expenses: 284.0,
  };

  const transactions = [
    { title: 'Upwork', date: 'Today', amount: 850.0 },
    { title: 'Transfer', date: 'Yesterday', amount: -85.0 },
    { title: 'Paypal', date: 'Jan 30, 2022', amount: 1406.0 },
    { title: 'Youtube', date: 'Jan 16, 2022', amount: -11.99 },
    { title: 'Upwork', date: 'Today', amount: 850.0 },
    { title: 'Transfer', date: 'Yesterday', amount: -85.0 },
    { title: 'Paypal', date: 'Jan 30, 2022', amount: 1406.0 },
    { title: 'Youtube', date: 'Jan 16, 2022', amount: -11.99 },
    { title: 'Upwork', date: 'Today', amount: 850.0 },
    { title: 'Transfer', date: 'Yesterday', amount: -85.0 },
    { title: 'Paypal', date: 'Jan 30, 2022', amount: 1406.0 },
    { title: 'Youtube', date: 'Jan 16, 2022', amount: -11.99 },
    // ... more transactions
  ];

  return (
    <Box sx={{ position: 'relative', flexGrow: 1 }}>
      <Container sx={{ position: 'relative', zIndex: 1, mt: '0vh', mb: 4 }}>
        <Box sx={{ mt: 10 }}>
          <BalanceCard totalBalance={balanceData.totalBalance} income={balanceData.income} expenses={balanceData.expenses} />
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Transactions History
          </Typography>
          <TransactionsList items={transactions} />
        </Box>
      </Container>
    </Box>
  );
};

export default Dashboard;


