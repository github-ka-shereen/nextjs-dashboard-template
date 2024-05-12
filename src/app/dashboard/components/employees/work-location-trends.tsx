'use client';

import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    office: 82,
    wfh: 44,
  },
  {
    name: 'Feb',
    office: 80,
    wfh: 40,
  },
  {
    name: 'Mar',
    office: 83,
    wfh: 42,
  },
  {
    name: 'Apr',
    office: 50,
    wfh: 50,
  },
  {
    name: 'May',
    office: 40,
    wfh: 60,
  },
  {
    name: 'Jun',
    office: 60,
    wfh: 40,
  },
  {
    name: 'Jul',
    office: 55,
    wfh: 55,
  },
  {
    name: 'Aug',
    office: 49,
    wfh: 61,
  },
  {
    name: 'Sep',
    office: 44,
    wfh: 70,
  },
  {
    name: 'Oct',
    office: 40,
    wfh: 40,
  },
  {
    name: 'Nov',
    office: 50,
    wfh: 50,
  },
  {
    name: 'Dec',
    office: 50,
    wfh: 50,
  },
];

export default function WorkLocationTrends() {
  return (
    <ResponsiveContainer height={350} width='100%'>
      <BarChart
        className='[&_.recharts-tooltip-cursor]:fill-zinc-200 [&_.recharts-tooltip-cursor]:dark:fill-zinc-800'
        data={data}
      >
        <XAxis dataKey='name' stroke='#888888' />
        <YAxis stroke='#888888' />
        <Tooltip
          separator=': '
          formatter={(value, name) => {
            if (name === 'wfh') {
              return [value, 'Working from home'];
            } else {
              return [value, 'Working from office'];
            }
          }}
          labelClassName='font-bold'
          wrapperClassName='dark:!bg-black rounded-lg !border-border'
        />
        <Legend
          iconType='circle'
          formatter={(value) => {
            if (value === 'wfh') {
              return <div>Work from home</div>;
            } else {
              return <div>Work from office</div>;
            }
          }}
        />
        <Bar
          dataKey='office'
          stackId={1}
          fill='#b37464'
          radius={[12, 12, 0, 0]}
        />
        <Bar dataKey='wfh' stackId={2} fill='#6a9282' radius={[12, 12, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
