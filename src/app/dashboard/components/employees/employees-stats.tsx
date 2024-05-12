import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  BadgeCheckIcon,
  BadgeXIcon,
  PartyPopper,
  UserCheck2,
  UserCircle2,
  UserIcon,
  UserRoundX,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import cm from '/public/images/cm.jpg';
import WorkLocationTrends from './work-location-trends';

export default function EmployeesStats() {
  const totalEmployees = 100;
  const employeesPresent = 90;
  const employeesPresentPercentage = (employeesPresent / totalEmployees) * 100;
  return (
    <>
      <div className='grid lg:grid-cols-3 gap-4'>
        <Card>
          <CardHeader>
            <CardTitle className='text-base'>Total employees</CardTitle>
          </CardHeader>
          <CardContent className='flex justify-between items-center'>
            <div className='flex gap-2'>
              <UserIcon />
              <div className='text-5xl'>{totalEmployees}</div>
            </div>
            <div>
              <Button size='xs' asChild>
                <Link href='/dashboard/employees'>VIEW ALL</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className='text-base'>Employees Present</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex gap-2'>
              {employeesPresentPercentage > 75 ? (
                <UserCheck2 />
              ) : (
                <UserRoundX />
              )}
              <div className='text-5xl font-bold'>{employeesPresent}</div>
            </div>
          </CardContent>
          <CardFooter>
            {employeesPresentPercentage > 75 ? (
              <span className='text-xs text-green-500 flex items-center gap-1'>
                <BadgeCheckIcon />
                {employeesPresentPercentage}% of employees are present
              </span>
            ) : (
              <span className='text-xs text-red-500 flex items-center gap-1'>
                <BadgeXIcon />
                Only {employeesPresentPercentage}% of employees are present
              </span>
            )}
          </CardFooter>
        </Card>
        <Card className='border-red-400 flex flex-col'>
          <CardHeader>
            <CardTitle className='text-base'>Employee of the month</CardTitle>
          </CardHeader>
          <CardContent className='flex gap-2 items-center'>
            <Avatar>
              <Image src={cm} alt='employee of the month' />
              <AvatarFallback>CM</AvatarFallback>
            </Avatar>
            <span className='text-2xl'>Colin Murray</span>
          </CardContent>
          <CardFooter className='flex gap-2 items-center text-xs text-muted-foreground mt-auto'>
            <PartyPopper className='text-red-500' />
            <span>Congratulations, Colin!</span>
          </CardFooter>
        </Card>
      </div>
      <Card className='my-4'>
        <CardHeader>
          <CardTitle className='text-lg flex items-center gap-2'>
            <UserCircle2 />
            <span>Employee work location trends</span>
          </CardTitle>
        </CardHeader>
        <CardContent className='pl-0'>
          <WorkLocationTrends />
        </CardContent>
      </Card>
    </>
  );
}
