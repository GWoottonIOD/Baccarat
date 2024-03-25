import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 12.5, 1.5, 5],
        },
        {
            data: [2, 8.5, 26, 12.5, 5.5, 35],
          },
      ]}
      width={500}
      height={300}
    />
  );
}