'use client';

import { FormEvent, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Textarea } from '@/components/ui/textarea';

const instagramUrl = 'https://ig.me/m/_pinonoir_';

export function BookingForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [preparedMessage, setPreparedMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      'Hi Pino Noir — I would like to check your availability.',
      '',
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone') || 'Not provided'}`,
      `Event type: ${data.get('eventType')}`,
      `Date: ${data.get('date')}`,
      `Location: ${data.get('location')}`,
      '',
      `${data.get('message')}`,
    ].join('\n');

    setPreparedMessage(message);
    setCopied(false);
    void navigator.clipboard?.writeText(message).then(() => setCopied(true));
    window.open(instagramUrl, '_blank', 'noopener,noreferrer');
  };

  const copyAgain = () => {
    if (!preparedMessage) return;
    void navigator.clipboard?.writeText(preparedMessage).then(() => setCopied(true));
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit} className="rounded-[2rem] border border-ink/15 bg-white p-5 text-ink shadow-[0_30px_90px_rgb(8_8_8/12%)] sm:p-8">
        <FieldGroup>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="name" className="font-label text-xs font-bold uppercase tracking-[0.13em] text-ink/65">Name</FieldLabel>
              <Input id="name" name="name" required autoComplete="name" placeholder="Your name" className="h-12 rounded-xl border-ink/18 bg-paper/45 px-4 text-base placeholder:text-ink/35 focus-visible:border-teal focus-visible:ring-teal/20" />
            </Field>
            <Field>
              <FieldLabel htmlFor="email" className="font-label text-xs font-bold uppercase tracking-[0.13em] text-ink/65">Email</FieldLabel>
              <Input id="email" name="email" type="email" required autoComplete="email" placeholder="you@email.com" className="h-12 rounded-xl border-ink/18 bg-paper/45 px-4 text-base placeholder:text-ink/35 focus-visible:border-teal focus-visible:ring-teal/20" />
            </Field>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="phone" className="font-label text-xs font-bold uppercase tracking-[0.13em] text-ink/65">Phone <span className="normal-case tracking-normal text-ink/35">optional</span></FieldLabel>
              <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(323) 555-0123" className="h-12 rounded-xl border-ink/18 bg-paper/45 px-4 text-base placeholder:text-ink/35 focus-visible:border-teal focus-visible:ring-teal/20" />
            </Field>
            <Field>
              <FieldLabel htmlFor="event-type" className="font-label text-xs font-bold uppercase tracking-[0.13em] text-ink/65">What are you planning?</FieldLabel>
              <NativeSelect id="event-type" name="eventType" required defaultValue="" className="w-full [&_[data-slot=native-select]]:h-12 [&_[data-slot=native-select]]:rounded-xl [&_[data-slot=native-select]]:border-ink/18 [&_[data-slot=native-select]]:bg-paper/45 [&_[data-slot=native-select]]:px-4 [&_[data-slot=native-select]]:text-base">
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
              <FieldLabel htmlFor="date" className="font-label text-xs font-bold uppercase tracking-[0.13em] text-ink/65">Event date</FieldLabel>
              <Input id="date" name="date" type="date" required className="h-12 rounded-xl border-ink/18 bg-paper/45 px-4 text-base focus-visible:border-teal focus-visible:ring-teal/20" />
            </Field>
            <Field>
              <FieldLabel htmlFor="location" className="font-label text-xs font-bold uppercase tracking-[0.13em] text-ink/65">Location</FieldLabel>
              <Input id="location" name="location" required autoComplete="street-address" placeholder="Venue or neighborhood" className="h-12 rounded-xl border-ink/18 bg-paper/45 px-4 text-base placeholder:text-ink/35 focus-visible:border-teal focus-visible:ring-teal/20" />
            </Field>
          </div>

          <Field>
            <FieldLabel htmlFor="message" className="font-label text-xs font-bold uppercase tracking-[0.13em] text-ink/65">Tell us about it</FieldLabel>
            <Textarea id="message" name="message" required rows={5} placeholder="A few details about the event, the room, and what you have in mind." className="min-h-32 rounded-xl border-ink/18 bg-paper/45 px-4 py-3 text-base placeholder:text-ink/35 focus-visible:border-teal focus-visible:ring-teal/20" />
          </Field>

          <Button type="submit" size="lg" className="mt-1 min-h-14 w-full rounded-full bg-ink px-7 font-label text-xs font-bold uppercase tracking-[0.15em] text-paper hover:-translate-y-0.5 hover:bg-[#fff1a8] hover:text-ink sm:w-auto">
            Check availability
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Button>
          <p className="text-sm leading-6 text-ink/48">This copies your details and opens Pino Noir on Instagram, ready to send.</p>
        </FieldGroup>
      </form>

      {preparedMessage && (
        <output aria-live="polite" className="mt-5 flex flex-col gap-4 rounded-2xl border border-teal/25 bg-teal/8 p-5 text-ink sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-teal text-white"><Check className="size-4" aria-hidden="true" /></span>
            <div>
              <p className="font-display text-xl font-bold">Got it.</p>
              <p className="mt-1 text-sm leading-6 text-ink/60">Your inquiry is prepared. Paste it into the Instagram message that just opened.</p>
            </div>
          </div>
          <Button type="button" variant="outline" onClick={copyAgain} className="rounded-full border-ink/20 bg-transparent px-5 text-ink hover:bg-ink hover:text-paper">
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copied ? 'Copied' : 'Copy details'}
          </Button>
        </output>
      )}
    </div>
  );
}
