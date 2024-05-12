import { setTimeout } from 'timers/promises';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DataTable } from '@/components/ui/data-table';
import { type Employee, columns } from './columns';

export default async function EmployeesPage() {
  await setTimeout(2000);

  const employees: Employee[] = [
    {
      id: 1,
      firstName: 'Colin',
      lastName: 'Murray',
      teamName: 'alpha',
      avatar: '/images/cm.jpg',
      isTeamLeader: true,
    },
    {
      id: 2,
      firstName: 'Emily',
      lastName: 'Jones',
      teamName: 'canary',
      avatar: '/images/gh.jpg',
      isTeamLeader: false,
    },
    {
      id: 3,
      firstName: 'Jack',
      lastName: 'Smith',
      teamName: 'alpha',

      isTeamLeader: false,
    },
    {
      id: 4,
      firstName: 'Sarah',
      lastName: 'Brown',
      teamName: 'alpha',
      avatar: '/images/rl.jpg',
      isTeamLeader: false,
    },
    {
      id: 5,
      firstName: 'Michael',
      lastName: 'Johnson',
      teamName: 'canary',
      isTeamLeader: true,
    },
    {
      id: 6,
      firstName: 'Jessica',
      lastName: 'Davis',
      teamName: 'alpha',
      isTeamLeader: false,
    },
    {
      id: 7,
      firstName: 'David',
      lastName: 'Martinez',
      teamName: 'canary',
      avatar: '/images/tf.jpg',
      isTeamLeader: false,
    },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Employees</CardTitle>
      </CardHeader>
      <CardContent className='capitalize'>
        <DataTable data={employees} columns={columns} />
      </CardContent>
    </Card>
  );
}
