import React from 'react';
import { Box, Typography } from '@mui/material';
import { BarChart, LineChart, ResponsiveChartContainer, axisClasses } from '@mui/x-charts';
import { useTheme } from 'styled-components';
import { ChartsTextStyle } from '@mui/x-charts/ChartsText';
import { FitScreen } from '@mui/icons-material';



function createData(
    time: string,
    amount?: number,
  ): { time: string; amount: number | null } {
    return { time, amount: amount ?? null };
  }
const data = [
    createData('00:00', 0),
    createData('03:00', 300),
    createData('06:00', 600),
    createData('09:00', 800),
    createData('12:00', 1500),
    createData('15:00', 2000),
    createData('18:00', 2400),
    createData('21:00', 2400),
    createData('24:00'),
  ];

  const StatisticsChart: React.FC = () => {
    // Dummy data - replace with your actual data
    const data = [
      { name: 'Mar', value: 800 },
      { name: 'Apr', value: 967 },
      { name: 'May', value: 1230 },
      // More data...
    ];
  
    return (
        <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
                {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
            ]}
            height={300}
            sx={{width: "100%"}}
            />
      );
    }
  export default StatisticsChart;
