'use client';
import React, { PureComponent } from 'react';

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
const data = [
  {
    name: 'Delta',
    value: 55,
    color: '#84cc16',
    id: 1,
  },
  {
    name: 'Alpha',
    value: 34,
    color: '#3b82f6',
    id: 2,
  },
  {
    name: 'Canary',
    value: 11,
    color: '#f97316',
    id: 3,
  },
];

export default class TeamDistributionChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width='100%' height={150}>
        <PieChart>
          <Tooltip
            labelClassName='font-bold'
            wrapperClassName='dark:[&_.recharts-tooltip-item]:!text-white [&_.recharts-tooltip-item]:!text-black !text-sm dark:!bg-black rounded-lg !border-border'
          />
          <Pie data={data} dataKey='value' nameKey='name'>
            {data.map((dataItem) => (
              <Cell key={dataItem.id} fill={dataItem.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
