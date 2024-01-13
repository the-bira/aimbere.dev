'use client'

import { TContactValidator } from '@/app/utils/contact-validator'
import { Section } from './Section'
import { Button } from './ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { useToast } from './ui/use-toast'
import { ToastAction } from './ui/toast'

const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
})

const ContactSection = () => {

  const { toast } = useToast()

  const form = useForm<TContactValidator>(
    {
      resolver: zodResolver(contactSchema),
      defaultValues: {
        name: '',
        email: '',
        message: '',
      }
    }
  )

  const handleSubmit = async () => {

    const { name, email, message } = form.getValues()

    const url = 'https://7mviaqj1tb.execute-api.sa-east-1.amazonaws.com/production/'

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })

    if (response.ok) {
      form.setValue('name', '')
      form.setValue('email', '')
      form.setValue('message', '')
      toast({
        description: 'Email sent successfully',
        title: 'Success',
      })
      return
    }

    toast({
      variant: 'destructive',
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    })
  }

  return (
    <Section id='contact' className="justify-center mt-1 bg-slate-50 dark:bg-slate-900">
      <div className="py-24 w-full xl:w-2/3 p-10 rounded-md">
        <h1 className="text-4xl text-center font-semibold mt-4">Contact</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder='What your name?' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='example@mail.com' {...field} type='email' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder='Type your message' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className='w-48 mt-8 p-4 self-center'>Submit</Button>
          </form>

        </Form>
      </div>
    </Section>
  )
}

export { ContactSection }