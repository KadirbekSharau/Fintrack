import React from 'react';
import Layout from '~/components/Layout/Layout';
//import StatisticsHeader from '.features/statistics/StatisticsHeader';
import TimeSegmentedControl from '~/features/statistics/components/TimeSegmentedControl';
import StatisticsChart from '~/features/statistics/components/StatisticsChart';
import StatisticsHeader from '~/features/statistics/components/StatisticsHeader';
import Footer from '~/components/Footer/Footer';
import { Typography } from '@mui/material';

export function StatisticsPage() {
  // You will have state and logic here to manage the data shown on the page

  return (
    <Layout>
      <StatisticsHeader />
      <TimeSegmentedControl />
      <Typography align='center' mt={4}>Income</Typography>
      <StatisticsChart />
      <Typography align='center'>Expenses</Typography>
      <StatisticsChart />
      <Footer showActionButton={false}/>
    </Layout>
  );
}

