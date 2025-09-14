import { ContactForm } from '@/components/contact/contact-form';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { IoChatbubbleEllipses } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { PiPhoneFill } from 'react-icons/pi';

function ContactSection() {
  return (
    <section id='contact' className='flex scroll-mt-16 flex-col'>
      <div className='flex flex-col'>
        <h2 className='text-foreground text-lg'>Contato</h2>
        <p className='text-muted-foreground'>Sinta-se à vontade para entrar em contato comigo</p>
      </div>
      <Accordion type='single' collapsible className='w-full'>
        <AccordionItem value='email'>
          <AccordionTrigger>
            <div className='flex flex-col'>
              <div className='flex items-center gap-2'>
                <MdEmail size={16} />
                <h3 className='text-foreground font-medium'>Email</h3>
              </div>
              <p className='text-muted-foreground text-sm'>Entre em contato através do meu email</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className='font-semibold'>vmsz.dev@gmail.com</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='phone'>
          <AccordionTrigger>
            <div className='flex flex-col'>
              <div className='flex items-center gap-2'>
                <PiPhoneFill size={16} />
                <h3 className='text-foreground font-medium'>Telefone</h3>
              </div>
              <p className='text-muted-foreground text-sm'>
                Entre em contato via ligação ou WhatsApp
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className='font-semibold'>+55 31 973602800</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='message'>
          <AccordionTrigger>
            <div className='flex flex-col'>
              <div className='flex items-center gap-2'>
                <IoChatbubbleEllipses size={16} />
                <h3 className='text-foreground font-medium'>Mensagem</h3>
              </div>
              <p className='text-muted-foreground text-sm'>
                Entre em contato via mensagem preenchendo o formulário abaixo com seus dados
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ContactForm />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export { ContactSection };
