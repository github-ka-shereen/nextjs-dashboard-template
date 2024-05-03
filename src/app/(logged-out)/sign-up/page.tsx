'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import Link from 'next/link';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter } from 'next/navigation';
import { Popover } from '@/components/ui/popover';
import { PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';

import { CalendarFoldIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';

const formSchema = z
  .object({
    email: z.string().email(),
    accountType: z.enum(['personal', 'company']),
    companyName: z.string().optional(),
    employees: z.coerce.number().optional(),
    dob: z.date().refine((date) => {
      const today = new Date();
      const eighteenYearsAgo = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getFullYear()
      );
      return date <= eighteenYearsAgo;
    }, 'You must be at least 18 years old'),
  })
  .superRefine((data, ctx) => {
    if (data.accountType === 'company' && !data.companyName) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['companyName'],
        message: 'Company Name Is Required',
      });
    }
    if (
      data.accountType === 'company' &&
      (!data.employees || data.employees < 1)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['employees'],
        message: 'Add Number Of Employees',
      });
    }
  });

export default function SignUpPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const router = useRouter();

  const handleSubmit = () => {
    console.log('LogIn Successful!!');
    form.reset();
    router.push('/sign-up');
  };

  const accountType = form.watch('accountType');

  return (
    <>
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle className='uppercase'>Dashboard SignUp</CardTitle>
          <CardDescription>Create An Account...</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            id='email'
                            placeholder='Enter Your Email'
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='flex flex-col space-y-4'>
                  <FormField
                    control={form.control}
                    name='accountType'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Account Type</FormLabel>
                        <Select onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder='Select An Account Type' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value='personal'>Personal</SelectItem>
                            <SelectItem value='company'>Company</SelectItem>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {accountType === 'company' && (
                    <>
                      <div className='flex flex-col space-y-1.5'>
                        <FormField
                          control={form.control}
                          name='companyName'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name</FormLabel>
                              <FormControl>
                                <Input
                                  id='companyName'
                                  placeholder='Company Name'
                                  {...field}
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className='flex flex-col space-y-1.5'>
                        <FormField
                          control={form.control}
                          name='employees'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Number Of Employees</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder='Employees'
                                  type='number'
                                  min={0}
                                  {...field}
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </>
                  )}
                  <div className='flex flex-col space-y-1.5'>
                    <FormField
                      control={form.control}
                      name='dob'
                      render={({ field }) => (
                        <FormItem className='flex flex-col'>
                          <FormLabel>Date Of Birth</FormLabel>

                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant='outline'
                                  className='flex justify-between items-center pr-2'
                                >
                                  {!!field.value ? (
                                    format(field.value, 'PPP')
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarFoldIcon />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              align='start'
                              className='w-auto p-0 mb-3'
                            >
                              <Calendar
                                defaultMonth={field.value}
                                selected={field.value}
                                onSelect={field.onChange}
                                mode='single'
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button type='submit'>SIGN UP</Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter className='flex justify-between items-center'>
          <small>Do You Have An Account?</small>
          <Button asChild variant='outline'>
            <Link href='/login'>LOGIN</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
