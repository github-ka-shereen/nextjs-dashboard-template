import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ListChecksIcon,
  PieChartIcon,
  StarIcon,
  UsersIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import cm from '/public/images/cm.jpg';
import tf from '/public/images/tf.jpg';
import rl from '/public/images/rl.jpg';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import TeamDistributionChart from './team-distribution-chart';
import SupportTicketsResolved from './support-tickets-resolved';

const teamLeaders = [
  {
    firstName: 'Colin',
    lastName: 'Murray',
    avatar: cm,
    id: 1,
  },
  {
    firstName: 'Tom',
    lastName: 'Phillips',
    id: 2,
  },
  {
    firstName: 'Liam',
    lastName: 'Fuentes',
    id: 3,
  },
  {
    firstName: 'Tina',
    lastName: 'Fey',
    avatar: tf,
    id: 4,
  },
  {
    firstName: 'Katie',
    lastName: 'Johnson',
    id: 5,
  },
  {
    firstName: 'Tina',
    lastName: 'Jones',
    id: 6,
  },
  {
    firstName: 'Amy',
    lastName: 'Adams',
    id: 7,
  },
  {
    firstName: 'Ryan',
    lastName: 'Lopez',
    avatar: rl,
    id: 8,
  },
  {
    firstName: 'Jenny',
    lastName: 'Jones',
    id: 9,
  },
];

export default function TeamsStats() {
  return (
    <>
      <div className='grid lg:grid-cols-3 gap-4'>
        <Card>
          <CardHeader>
            <CardTitle className='text-base'>Total teams</CardTitle>
          </CardHeader>
          <CardContent className='flex justify-between items-center'>
            <div className='flex gap-2'>
              <UsersIcon />
              <div className='text-5xl'>8</div>
            </div>
            <div>
              <Button size='xs' asChild>
                <Link href='/dashboard/teams'>VIEW ALL</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className='text-base flex justify-between items-center'>
              <span>Team leaders</span>
              <StarIcon className='text-yellow-500' />
            </CardTitle>
          </CardHeader>
          <CardContent className='flex flex-wrap gap-2'>
            {teamLeaders.map((teamLeader) => (
              <TooltipProvider key={teamLeader.id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar className='cursor-pointer'>
                      {!!teamLeader.avatar && (
                        <Image
                          src={teamLeader.avatar}
                          alt={`${teamLeader.firstName} ${teamLeader.lastName} avatar`}
                        />
                      )}
                      <AvatarFallback>
                        {teamLeader.firstName[0]} {teamLeader.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    {teamLeader.firstName} {teamLeader.lastName}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className='text-base flex justify-between items-center'>
              <span>Team distribution</span>
              <PieChartIcon />
            </CardTitle>
          </CardHeader>
          <CardContent className='pb-0'>
            <TeamDistributionChart />
          </CardContent>
        </Card>
      </div>
      <Card className='my-4'>
        <CardHeader>
          <CardTitle className='text-lg flex items-center gap-2'>
            <ListChecksIcon />
            <span>Support tickets resolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent className='pl-0'>
          <SupportTicketsResolved/>
        </CardContent>
      </Card>
    </>
  );
}
