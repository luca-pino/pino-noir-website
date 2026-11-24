'use client';

import { FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Textarea } from '@/components/ui/textarea';

const bookingEmail = 'bookings@lagypsyjazz.com';

export function BookingForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const eventType = String(data.get('eventType') ?? '').trim();
    const date = String(data.get('date') ?? '').trim();
    const subject = `Pino Noir booking inquiry — ${eventType} — ${date}`;
    const body = [
      'Hello Pino Noir,',
      '',
      'I would like to check your availability.',
      '',
      `Name: ${name}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone') || 'Not provided'}`,
      `Event type: ${eventType}`,
      `Date: ${date}`,
      `Location: ${data.get('location')}`,
      '',
      'Event details:',
      `${data.get('message')}`,
    ].join('\n');

    window.location.href = `mailto:${bookingEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="rounded-[2rem] border border-violet/35 bg-[#0d0b12]/95 p-5 text-white shadow-[0_30px_90px_rgb(0_0_0/35%)] sm:p-8">
        <FieldGroup>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="name" className="font-label text-xs font-bold uppercase tracking-[0.13em] text-white/65">Name</FieldLabel>
              <Input id="name" name="name" required autoComplete="name" placeholder="Your name" className="h-12 rounded-xl border-violet/35 bg-white/6 px-4 text-base text-white placeholder:text-white/35 focus-visible:border-magenta focus-visible:ring-magenta/20" />
            </Field>
            <Field>
              <FieldLabel htmlFor="email" className="font-label text-xs font-bold uppercase tracking-[0.13em] text-white/65">Email</FieldLabel>
              <Input id="email" name="email" type="email" required autoComplete="email" placeholder="you@email.com" className="h-12 rounded-xl border-violet/35 bg-white/6 px-4 text-base text-white placeholder:text-white/35 focus-visible:border-magenta focus-visible:ring-magenta/20" />
            </Field>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="phone" className="font-label text-xs font-bold uppercase tracking-[0.13em] text-white/65">Phone <span className="normal-case tracking-normal text-white/35">optional</span></FieldLabel>
              <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(323) 555-0123" className="h-12 rounded-xl border-violet/35 bg-white/6 px-4 text-base text-white placeholder:text-white/35 focus-visible:border-magenta focus-visible:ring-magenta/20" />
            </Field>
            <Field>
              <FieldLabel htmlFor="event-type" className="font-label text-xs font-bold uppercase tracking-[0.13em] text-white/65">What are you planning?</FieldLabel>
              <NativeSelect id="event-type" name="eventType" required defaultValue="" className="w-full [&_[data-slot=native-select]]:h-12 [&_[data-slot=native-select]]:rounded-xl [&_[data-slot=native-select]]:border-violet/35 [&_[data-slot=native-select]]:bg-white/6 [&_[data-slot=native-select]]:px-4 [&_[data-slot=native-select]]:text-base [&_[data-slot=native-select]]:text-white">
                <NativeSelectOption value="" disabled>Choose one</NativeSelectOption>
                <NativeSelectOption value="Venue booking">Venue booking</NativeSelectOption>
                <NativeSelectOption value="Private event">Private event</NativeSelectOption>
                <NativeSelectOption value="Wedding">Wedding</NativeSelectOption>
                <NativeSelectOption value="Something else">Something else</NativeSelectOption>
              </NativeSelect>
            </Field>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="date" className="font-label text-xs font-bold uppercase tracking-[0.13em] text-white/65">Event date</FieldLabel>
              <Input id="date" name="date" type="date" required className="h-12 rounded-xl border-violet/35 bg-white/6 px-4 text-base text-white [color-scheme:dark] focus-visible:border-magenta focus-visible:ring-magenta/20" />
            </Field>
            <Field>
              <FieldLabel htmlFor="location" className="font-label text-xs font-bold uppercase tracking-[0.13em] text-white/65">Location</FieldLabel>
              <Input id="location" name="location" required autoComplete="street-address" placeholder="Venue or neighborhood" className="h-12 rounded-xl border-violet/35 bg-white/6 px-4 text-base text-white placeholder:text-white/35 focus-visible:border-magenta focus-visible:ring-magenta/20" />
            </Field>
          </div>

          <Field>
            <FieldLabel htmlFor="message" className="font-label text-xs font-bold uppercase tracking-[0.13em] text-white/65">Tell us about it</FieldLabel>
            <Textarea id="message" name="message" required rows={5} placeholder="A few details about the event, the room, and what you have in mind." className="min-h-32 rounded-xl border-violet/35 bg-white/6 px-4 py-3 text-base text-white placeholder:text-white/35 focus-visible:border-magenta focus-visible:ring-magenta/20" />
          </Field>

          <Button type="submit" size="lg" className="mt-1 min-h-14 w-full rounded-full bg-magenta px-7 font-label text-xs font-bold uppercase tracking-[0.15em] text-white hover:-translate-y-0.5 hover:bg-violet sm:w-auto">
            Send
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Button>
        </FieldGroup>
      </form>
    </div>
  );
}
