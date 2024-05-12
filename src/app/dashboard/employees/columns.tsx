'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  teamName: string;
  avatar?: string;
  isTeamLeader: boolean;
};

export const columns: ColumnDef<Employee>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'avatar',
    header: '',
    cell: ({ row }) => {
      const avatar: string = row.getValue('avatar');
      const firstName: string = row.getValue('firstName');
      const lastName: string = row.getValue('lastName');
      return (
        <Avatar>
          {!!avatar && (
            <Image
              height={40}
              width={40}
              src={avatar}
              alt={`${firstName} ${lastName} avatar`}
            />
          )}
          <AvatarFallback className='uppercase'>
            {firstName[0]}
            {lastName[0]}
          </AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: 'firstName',
    header: 'First Name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },

  {
    accessorKey: 'teamName',
    header: 'Team',
  },
  {
    accessorKey: 'isTeamLeader',
    header: '',
    cell: ({ row }) => {
      const isTeamLeader: boolean = row.getValue('isTeamLeader');
      return isTeamLeader ? <Badge variant='success'>Team Leader</Badge> : '';
    },
  },
];
