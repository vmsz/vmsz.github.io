'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { ImSpinner8 } from 'react-icons/im';
import { toast } from 'sonner';

function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const message = formData.get('message')?.toString().trim();

    setLoading(true);
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: '8f998725-a1fd-45f0-ae79-4b739d8e1c38',
        name: name,
        email: email,
        message: message,
      }),
    })
      .then(() => {
        setLoading(false);
        toast.success('Mensagem enviada com sucesso!');
        form.reset();
      })
      .catch(() => {
        setLoading(false);
        toast.error('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
      });
  };

  return (
    <form className='flex max-w-xs flex-col gap-4' onSubmit={handleSubmit}>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='name'>Nome ou empresa</Label>
          <Input id='name' name='name' type='text' required />
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' name='email' type='email' required />
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='message'>Mensagem</Label>
          <Textarea id='message' name='message' required />
        </div>
      </div>
      <Button type='submit' className='cursor-pointer px-8'>
        {loading ? <ImSpinner8 className='!size-6 animate-spin' /> : 'Enviar mensagem'}
      </Button>
    </form>
  );
}

export { ContactForm };
