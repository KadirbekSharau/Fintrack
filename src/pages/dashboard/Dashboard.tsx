import React from 'react';
import BackgroundShape from '~/components/BackgroundShape/BackgroundShape';
import Footer from '~/components/Footer/Footer';
import Layout from '~/components/Layout/Layout';
import Dashboard from '~/features/dashboard/components/Dashboard';
import { UserData } from '~/features/dashboard/types';

export function DashboardPage() {
  // Normally, you'd fetch this data from your backend
  const userData: UserData = {
    name: 'Kadirbek Sharau',
    balance: 2548.00,
    income: 1840.00,
    expenses: 284.00,
    transactions: [
      { id: 1, title: 'Upwork', amount: 850.00, date: 'Today', type: 'income' },
      { id: 2, title: 'Transfer', amount: -85.00, date: 'Yesterday', type: 'expense' },
      { id: 3, title: 'Paypal', amount: 1406.00, date: 'Jan 30, 2022', type: 'income' },
      { id: 4, title: 'Youtube', amount: -11.99, date: 'Jan 16, 2022', type: 'expense' },
      { id: 1, title: 'Upwork', amount: 850.00, date: 'Today', type: 'income' },
      { id: 2, title: 'Transfer', amount: -85.00, date: 'Yesterday', type: 'expense' },
      { id: 3, title: 'Paypal', amount: 1406.00, date: 'Jan 30, 2022', type: 'income' },
      { id: 4, title: 'Youtube', amount: -11.99, date: 'Jan 16, 2022', type: 'expense' },
      { id: 1, title: 'Upwork', amount: 850.00, date: 'Today', type: 'income' },
      { id: 2, title: 'Transfer', amount: -85.00, date: 'Yesterday', type: 'expense' },
      { id: 3, title: 'Paypal', amount: 1406.00, date: 'Jan 30, 2022', type: 'income' },
      { id: 4, title: 'Youtube', amount: -11.99, date: 'Jan 16, 2022', type: 'expense' },
      // ... more transactions
    ],
  };

  return (
    <Layout>
      <BackgroundShape></BackgroundShape>
      <Dashboard userData={userData} />
      <Footer showActionButton={true}/>
    </Layout>
  );
}

export default DashboardPage;