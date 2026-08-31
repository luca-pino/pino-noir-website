import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  AtSign,
  Building2,
  Heart,
  MapPin,
  PartyPopper,
  Play,
  Sparkles,
} from 'lucide-react';

import { AudioPlayer } from '@/components/audio-player';
import { BookingForm } from '@/components/booking-form';

const offerings = [
  {
    eyebrow: 'Venues',
    title: 'Give the room a pulse.',
    body: 'Cocktail bars, restaurants, hotels, clubs, and rooms where live music becomes part of why people stay. Pino Noir can sit naturally inside a night without disappearing into the background.',
    detail: 'Tell us about the space, the schedule, and what you are putting together.',
    cta: 'Venue inquiry',
    icon: Building2,
    tone: 'bg-plum text-paper',
    accent: 'text-mint',
  },
  {
    eyebrow: 'Private events',
    title: 'A party should sound like somewhere.',
    body: 'Birthdays, dinners, celebrations, brand events, garden parties, and the nights that deserve more than a playlist. Enough energy to pull people toward the music, with room for everything else.',
    detail: 'Give the evening a center of gravity.',
    cta: 'Plan an event',
    icon: PartyPopper,
    tone: 'bg-orange text-ink',
    accent: 'text-ink/55',
  },
  {
    eyebrow: 'Weddings',
    title: 'Put some swing in it.',
    body: 'Gypsy Jazz moves easily through a wedding: intimate enough for a ceremony, loose enough for cocktails, and alive enough to carry a celebration.',
    detail: 'Ceremony, cocktail hour, dinner, or music woven through the evening.',
    cta: 'Wedding inquiry',
    icon: Heart,
    tone: 'bg-teal text-white',
    accent: 'text-mint',
  },
] as const;

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-ink">
        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-5 sm:h-24 sm:px-8 lg:px-12">
          <a href="#top" aria-label="Pino Noir home" className="shrink-0">
            <img
              src="/brand/pino-noir-wordmark.png"
              alt="Pino Noir"
              className="h-14 w-auto object-contain sm:h-16"
            />
          </a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
            <a href="#about" className="nav-link">About</a>
            <a href="#watch" className="nav-link">Watch</a>
            <a href="#hire-us" className="nav-link">Hire us</a>
            <a
              href="https://www.instagram.com/_pinonoir_/"
              target="_blank"
              rel="noreferrer"
              className="nav-link"
            >
              Instagram
            </a>
          </nav>
          <a
            href="#book"
            className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-4 font-label text-[0.66rem] font-bold uppercase tracking-[0.12em] text-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint sm:px-5 sm:text-[0.72rem] sm:tracking-[0.13em]"
          >
            <span className="sm:hidden">Book</span>
            <span className="hidden sm:inline">Check availability</span>
            <ArrowDown className="size-3.5 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </header>

      <section id="top" className="relative grid min-h-svh bg-ink lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10 flex items-center px-5 pb-28 pt-32 sm:px-8 sm:pb-36 sm:pt-40 lg:px-12 lg:pb-40 lg:pt-36">
          <div className="mx-auto w-full max-w-3xl lg:mx-0">
            <p className="mb-6 flex items-center gap-2 font-label text-xs font-bold uppercase tracking-[0.2em] text-mint">
              <MapPin className="size-3.5" aria-hidden="true" />
              Los Angeles, California
            </p>
            <h1 className="font-display max-w-[11ch] text-[clamp(4rem,9vw,8.8rem)] font-black leading-[0.82] tracking-[-0.055em] text-paper">
              You were looking for this sound.
            </h1>
            <p className="mt-8 max-w-[42rem] text-base leading-7 text-paper/72 sm:text-lg sm:leading-8">
              Pino Noir plays Gypsy Jazz in Los Angeles for venues, private events, and weddings. Hot-club swing, acoustic guitars, and a room that starts moving.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#book" className="primary-cta">
                Check availability
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <a href="#watch" className="secondary-cta">
                <Play className="size-3.5 fill-current" aria-hidden="true" />
                Watch us play
              </a>
            </div>
          </div>
        </div>

        <figure className="relative min-h-[42rem] overflow-hidden lg:min-h-svh">
          <img
            src="/images/hero-luca.webp"
            alt="Luca Pino in a white suit holding an archtop guitar and red rose in Los Angeles"
            className="absolute inset-0 h-full w-full object-cover object-[center_24%]"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/10 lg:bg-gradient-to-r lg:from-ink/55 lg:via-transparent lg:to-transparent" />
          <figcaption className="absolute bottom-28 right-5 flex items-center gap-2 rounded-full border border-paper/25 bg-ink/45 px-4 py-2 font-label text-[0.65rem] font-bold uppercase tracking-[0.17em] text-paper backdrop-blur-md sm:bottom-36 sm:right-8 lg:right-12">
            <Sparkles className="size-3.5 text-gold" aria-hidden="true" />
            Hot-club swing for Los Angeles nights
          </figcaption>
        </figure>

        <a
          href="#watch"
          className="group absolute inset-x-0 bottom-0 z-20 border-t border-paper/15 bg-ink/88 px-5 py-5 backdrop-blur-xl transition-colors hover:bg-plum sm:px-8 lg:px-12"
          aria-label="Jump to the Pino Noir recordings"
        >
          <div className="mx-auto flex max-w-[1600px] items-center gap-4 sm:gap-6">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gold text-ink transition-transform group-hover:scale-105">
              <Play className="ml-0.5 size-4 fill-current" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-label text-[0.64rem] font-bold uppercase tracking-[0.16em] text-paper/45">Three songs, ready when you are</p>
              <p className="truncate font-display text-lg font-bold text-paper sm:text-2xl">Snake Rag · Latcho Drom · Please</p>
            </div>
            <ArrowRight className="size-5 shrink-0 text-gold transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </div>
        </a>
      </section>

      <section className="bg-paper px-5 py-24 text-ink sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="section-kicker text-teal">The sound</p>
            <h2 className="font-display mt-5 max-w-[12ch] text-[clamp(3rem,6vw,6rem)] font-black leading-[0.9] tracking-[-0.045em]">
              A sound built to travel through a room.
            </h2>
          </div>
          <div className="grid gap-8 border-l border-ink/20 pl-6 text-base leading-8 text-ink/68 sm:pl-10 sm:text-lg lg:grid-cols-2">
            <p>
              Gypsy Jazz grew out of 1930s Paris around Django Reinhardt and the Quintette du Hot Club de France. Acoustic guitars moving at dance-floor speed. Melodies passed from player to player.
            </p>
            <div>
              <p>
                Nearly a century later, the music still knows what to do. It can sit behind a conversation, gather heat through a cocktail hour, then suddenly have half the room turned toward the band.
              </p>
              <p className="mt-5 font-display text-2xl font-bold text-teal">In Los Angeles, Pino Noir keeps that sound moving.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] grid-cols-12 gap-3 sm:gap-5">
          <figure className="col-span-8 overflow-hidden rounded-[1.5rem] sm:col-span-7 sm:rounded-[2.5rem]">
            <img
              src="/images/luca-rug.webp"
              alt="Luca Pino in a rust-colored suit with guitar on a patterned rug"
              loading="lazy"
              className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </figure>
          <div className="col-span-4 flex flex-col justify-between rounded-[1.5rem] bg-gold p-4 text-ink sm:col-span-5 sm:rounded-[2.5rem] sm:p-9">
            <Sparkles className="size-6 sm:size-9" aria-hidden="true" />
            <p className="font-display text-[clamp(1.5rem,4vw,4rem)] font-black leading-[0.95] tracking-[-0.04em]">
              Elegance without stiffness. Energy without machinery.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 bg-teal px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <figure className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -inset-3 rotate-2 rounded-[2.5rem] border border-mint/50" aria-hidden="true" />
            <img
              src="/images/pino-noir-band.webp"
              alt="The four members of Pino Noir gathered with their instruments in a Los Angeles courtyard"
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover object-center shadow-[0_35px_90px_rgb(8_8_8/28%)]"
            />
            <figcaption className="absolute bottom-5 left-5 rounded-full bg-ink/72 px-4 py-2 font-label text-[0.64rem] font-bold uppercase tracking-[0.16em] text-paper backdrop-blur-md sm:bottom-7 sm:left-7">
              Los Angeles Gypsy Jazz
            </figcaption>
          </figure>
          <div className="lg:pl-8">
            <p className="section-kicker text-mint">Meet the band</p>
            <h2 className="font-display mt-5 max-w-[10ch] text-[clamp(3.7rem,7vw,7.2rem)] font-black leading-[0.82] tracking-[-0.055em]">Meet Pino Noir.</h2>
            <div className="mt-9 max-w-2xl space-y-6 text-lg leading-8 text-white/76">
              <p>Pino Noir is a Los Angeles Gypsy Jazz ensemble built around swing, improvisation, and the chemistry of musicians playing together in a room.</p>
              <p>We play for people who want the music to shape the night. Sometimes that means a packed room leaning into the band. Sometimes it means a table of friends, a round of drinks, and guitars moving underneath the conversation.</p>
            </div>
            <p className="font-display mt-8 text-3xl font-bold text-mint">Every room is different. We listen to it.</p>
            <a href="#watch" className="mt-9 inline-flex items-center gap-2 rounded-full border border-white/35 px-7 py-4 font-label text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:border-gold hover:bg-gold hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
              Hear the band
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section id="watch" className="scroll-mt-24 bg-ink px-5 py-24 text-paper sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker text-orange">Watch / listen</p>
              <h2 className="font-display mt-5 text-[clamp(3.7rem,7vw,7.5rem)] font-black leading-[0.82] tracking-[-0.055em]">Hear it in the room.</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-paper/60 sm:text-lg">The fastest way to understand Pino Noir is to hear the band play.</p>
          </div>

          <figure className="mt-14 overflow-hidden rounded-[2rem] border border-paper/15 bg-[#101114] shadow-[0_40px_100px_rgb(0_0_0/45%)]">
            <iframe
              src="https://www.youtube-nocookie.com/embed/s5QRvF4GJU8?rel=0"
              title="Pino Noir Sizzle — live performance video"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="aspect-video w-full bg-black"
            />
            <figcaption className="flex flex-col gap-2 border-t border-paper/15 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
              <div>
                <p className="font-display text-2xl font-bold">Pino Noir Sizzle</p>
                <p className="mt-1 text-sm text-paper/48">Live performance reel</p>
              </div>
              <a href="https://www.instagram.com/_pinonoir_/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-[0.14em] text-mint hover:text-gold">
                More on Instagram
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </figcaption>
          </figure>

          <div className="mt-8">
            <AudioPlayer />
          </div>
        </div>
      </section>

      <section id="hire-us" className="scroll-mt-24 bg-paper px-5 py-24 text-ink sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="section-kicker text-teal">Hire Pino Noir</p>
              <h2 className="font-display mt-5 max-w-[10ch] text-[clamp(3.7rem,7vw,7.2rem)] font-black leading-[0.84] tracking-[-0.055em]">Bring Pino Noir into the room.</h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-ink/62">Every booking starts with the same question: what kind of night are you trying to make? Tell us where, when, and what you have in mind. We can take it from there.</p>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {offerings.map((offering) => {
              const Icon = offering.icon;
              return (
                <article key={offering.eyebrow} className={`group flex min-h-[32rem] flex-col justify-between rounded-[2rem] p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-9 ${offering.tone}`}>
                  <div>
                    <div className="flex items-center justify-between">
                      <p className={`section-kicker ${offering.accent}`}>{offering.eyebrow}</p>
                      <Icon className={`size-6 ${offering.accent}`} aria-hidden="true" />
                    </div>
                    <h3 className="font-display mt-8 text-[clamp(2.5rem,4vw,4rem)] font-black leading-[0.9] tracking-[-0.045em]">{offering.title}</h3>
                    <p className="mt-7 text-base leading-7 opacity-72">{offering.body}</p>
                    <p className="mt-5 font-display text-xl font-bold opacity-88">{offering.detail}</p>
                  </div>
                  <a href="#book" className="mt-10 inline-flex w-fit items-center gap-2 border-b border-current pb-1 font-label text-xs font-bold uppercase tracking-[0.15em] transition-opacity hover:opacity-60">
                    {offering.cta}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </article>
              );
            })}
          </div>

          <figure className="relative mt-5 overflow-hidden rounded-[2rem] bg-ink">
            <img
              src="/images/luca-live-red.webp"
              alt="Luca Pino playing guitar on stage in a vivid red suit"
              loading="lazy"
              className="h-[32rem] w-full object-cover object-[center_35%] opacity-72 sm:h-[40rem] lg:object-[center_42%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/45 to-transparent" />
            <blockquote className="absolute inset-y-0 left-0 flex max-w-3xl flex-col justify-center p-7 text-paper sm:p-12 lg:p-16">
              <Sparkles className="size-8 text-gold" aria-hidden="true" />
              <p className="font-display mt-7 text-[clamp(2.8rem,6vw,6rem)] font-black leading-[0.9] tracking-[-0.05em]">The music moves. People talk. Another round arrives.</p>
            </blockquote>
          </figure>
        </div>
      </section>

      <section id="book" className="scroll-mt-24 bg-parchment px-5 py-24 text-ink sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-36 lg:self-start">
            <p className="section-kicker text-teal">Bookings</p>
            <h2 className="font-display mt-5 max-w-[8ch] text-[clamp(4rem,7vw,7.5rem)] font-black leading-[0.82] tracking-[-0.055em]">Have a date in mind?</h2>
            <p className="mt-8 max-w-md text-lg leading-8 text-ink/62">Send us the basics. We&apos;ll get back to you with availability and next steps.</p>
            <div className="mt-10 flex items-center gap-3 text-sm text-ink/55">
              <AtSign className="size-5 text-teal" aria-hidden="true" />
              <span>Booking conversations continue with <strong className="text-ink">@_pinonoir_</strong></span>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>

      <footer className="bg-ink px-5 py-14 text-paper sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-end gap-5">
            <img src="/brand/pino-noir-wordmark.png" alt="Pino Noir" className="h-24 w-auto" />
            <p className="mb-2 font-label text-[0.66rem] font-bold uppercase leading-5 tracking-[0.15em] text-paper/42">Los Angeles<br />Gypsy Jazz</p>
          </div>
          <div className="flex flex-col gap-4 sm:items-end">
            <a href="https://www.instagram.com/_pinonoir_/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-[0.15em] text-mint hover:text-gold">
              Instagram @_pinonoir_
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <p className="text-sm text-paper/35">© 2026 Pino Noir · Los Angeles, CA</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
