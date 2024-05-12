'use client';

import * as React from 'react';

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
import { useRouter } from 'next/navigation';
import { PasswordInput } from '@/components/ui/password-input';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export default function LogInPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const router = useRouter();

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log('LogIn Successful!!', data);
    form.reset();
    router.push('/dashboard');
  };

  return (
    <>
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle className='uppercase'>Dashboard LogIn</CardTitle>
          <CardDescription>Log In to your Admin Account.</CardDescription>
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
                        <FormDescription>
                          This is the email you used to sign up with...
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='flex flex-col space-y-4'>
                  <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <PasswordInput
                            placeholder='Enter Your Password'
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type='submit'>LOGIN</Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter className='flex justify-between items-center'>
          <small>Do You Have An Account?</small>
          <Button asChild variant='outline'>
            <Link href='/sign-up'>SIGNUP</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
