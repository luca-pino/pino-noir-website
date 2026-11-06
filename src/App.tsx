import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  AtSign,
  Building2,
  Heart,
  PartyPopper,
  Play,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';

import { AudioPlayer } from '@/components/audio-player';
import { BookingForm } from '@/components/booking-form';

const instagramUrl = 'https://www.instagram.com/_pinonoir_/';
const bandcampUrl = 'https://lucapino.bandcamp.com/album/the-lafayette-sessions';

const outfitSlides = [
  {
    src: '/images/pino-noir-garage.jpg',
    alt: 'Pino Noir quartet posed in front of a Los Angeles garage',
    label: 'The quartet',
    starColor: 'text-[#5f9c8b]',
  },
  {
    src: '/images/pino-noir-trio-rooftop.jpg',
    alt: 'Pino Noir trio performing with violin, upright bass, and guitar on a rooftop',
    label: 'The trio',
    starColor: 'text-[#d64545]',
  },
  {
    src: '/images/pino-noir-duo-vocals.jpg',
    alt: 'Pino Noir guitarist and vocalist performing together in black and white',
    label: 'Duo with vocals',
    starColor: 'text-[#e9dfc9]',
  },
  {
    src: '/images/luca-gold-curtain.jpg',
    alt: 'Luca Pino playing guitar in a white suit in front of a gold curtain',
    label: 'Solo guitar',
    starColor: 'text-[#b88727]',
  },
] as const;

const hireSlides = [
  {
    src: '/images/luca-ticket-window.jpg',
    alt: 'Luca Pino in a green suit beside a vintage ticket window',
  },
  {
    src: '/images/luca-hire-portrait-1.jpg',
    alt: 'Luca Pino portrait in a suit',
  },
  {
    src: '/images/luca-hire-garden.jpg',
    alt: 'Luca Pino playing guitar in a garden',
  },
  {
    src: '/images/pino-noir-hire-stage.jpg',
    alt: 'Pino Noir performing together onstage',
  },
  {
    src: '/images/luca-hire-agua-caliente.jpg',
    alt: 'A sequence of Luca Pino performing guitar at Agua Caliente Casino',
  },
  {
    src: '/images/pino-noir-hire-freight.jpg',
    alt: 'Five Pino Noir musicians outside The Freight music venue',
  },
] as const;

const offerings = [
  {
    eyebrow: 'Weddings',
    title: 'Put some swing in it.',
    body: 'Whether you are looking for ceremony music, cocktail hour, dinner background, or end of the night dance band, Pino Noir may be perfect for your wedding.',
    detail: 'From the first note to the last dance, we want to be the soundtrack that shapes your day.',
    cta: 'Wedding inquiry',
    icon: Heart,
    tone: 'bg-[#408c69] text-white',
    accent: 'text-mint',
    labelAccent: 'text-mint',
  },
  {
    eyebrow: 'Venues',
    title: 'Give the room a unique pulse.',
    body: 'Music venues, theaters, restaurants, hotels, clubs, or coffee shops. Our scintillating sounds of jazz will leave the audience wanting more.',
    detail: 'Book us for weekly or monthly engagements at your venue.',
    cta: 'Venue inquiry',
    icon: Building2,
    tone: 'bg-[#080921] text-paper',
    accent: 'text-mint',
    labelAccent: 'text-[#ee9b9b]',
  },
  {
    eyebrow: 'Private events',
    title: 'A party with flair',
    body: "Birthdays, dinners, celebrations, brand events, garden parties, you name it. We'd love to provide the music for any shindig you're throwing.",
    detail: 'Give the evening a musical twist to remember.',
    cta: 'Plan an event',
    icon: PartyPopper,
    tone: 'bg-[#ffbdbd] text-ink',
    accent: 'text-ink/55',
    labelAccent: 'text-ink/55',
  },
] as const;

export default function App() {
  const [outfitSlide, setOutfitSlide] = useState(0);
  const currentOutfit = outfitSlides[outfitSlide];
  const showPreviousOutfit = () => setOutfitSlide((current) => (current - 1 + outfitSlides.length) % outfitSlides.length);
  const showNextOutfit = () => setOutfitSlide((current) => (current + 1) % outfitSlides.length);
  const [hireSlide, setHireSlide] = useState(0);
  const currentHirePhoto = hireSlides[hireSlide];
  const showPreviousHirePhoto = () => setHireSlide((current) => (current - 1 + hireSlides.length) % hireSlides.length);
  const showNextHirePhoto = () => setHireSlide((current) => (current + 1) % hireSlides.length);

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
            <a href="#top" className="nav-link">About</a>
            <a href="#about" className="nav-link">Bands</a>
            <a href="#watch" className="nav-link">Watch/Listen</a>
            <a href="#hire-us" className="nav-link">Hire us</a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="nav-link"
            >
              Instagram
            </a>
            <a
              href={bandcampUrl}
              target="_blank"
              rel="noreferrer"
              className="nav-link"
            >
              Bandcamp
            </a>
          </nav>
          <a
            href="#book"
            className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-4 font-label text-[0.66rem] font-bold uppercase tracking-[0.12em] text-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint sm:px-5 sm:text-[0.72rem] sm:tracking-[0.13em]"
          >
            <span>Book Now</span>
            <ArrowDown className="size-3.5 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </header>

      <section id="top" className="relative grid min-h-svh bg-ink lg:grid-cols-[1.05fr_0.95fr]">
        <div className="hero-copy-panel relative z-10 flex items-center px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-40 lg:px-12 lg:pb-24 lg:pt-36">
          <div className="mx-auto w-full max-w-3xl lg:mx-0">
            <p className="section-kicker mb-6 text-[#68b4ee]">About</p>
            <h1 className="font-display max-w-[11ch] text-[clamp(4rem,9vw,8.8rem)] font-black leading-[0.82] tracking-[-0.055em] text-paper">
              Pino Noir.
            </h1>
            <p className="mt-8 max-w-[42rem] text-base leading-7 text-paper/72 sm:text-lg sm:leading-8">
              Pino Noir is a red-hot &apos;electric&apos; gypsy jazz band, led by Los Angeles born guitarist Luca Pino. Their aim is to revitalize the atmosphere of the underground jazz scene in 1930&apos;s Paris, with nothing but virtuosity and panache. Available to hire for any occasion.
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
          <figcaption className="absolute bottom-6 right-5 flex items-center gap-2 rounded-full border border-paper/25 bg-ink/45 px-4 py-2 font-label text-[0.65rem] font-bold uppercase tracking-[0.17em] text-paper backdrop-blur-md sm:bottom-8 sm:right-8 lg:right-12">
            <Sparkles className="size-3.5 text-[#58aee0]" aria-hidden="true" />
            Luca Pino - bandleader
          </figcaption>
        </figure>
      </section>

      <section id="about" className="about-stage scroll-mt-24 px-5 py-24 text-paper sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-14">
          <figure className="relative order-2 mx-auto w-full max-w-3xl" aria-roledescription="carousel" aria-label="Pino Noir performance outfits">
            <div className="absolute -inset-3 rounded-[2.5rem] border border-orange/65" aria-hidden="true" />
            <button
              type="button"
              onClick={showNextOutfit}
              className="group relative block w-full overflow-hidden rounded-[2rem] text-left shadow-[0_35px_90px_rgb(8_8_8/28%)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              aria-label={`Show next photo. Currently showing ${currentOutfit.label}.`}
            >
              <img
                src={currentOutfit.src}
                alt={currentOutfit.alt}
                loading="lazy"
                className="aspect-[3/2] w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.015]"
              />
            </button>
            <figcaption className="pointer-events-none absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-gold/25 bg-ink/82 px-4 py-2 font-label text-[0.64rem] font-bold uppercase tracking-[0.16em] text-paper backdrop-blur-md sm:bottom-7 sm:left-7" aria-live="polite">
              <Sparkles className={`size-3.5 ${currentOutfit.starColor}`} aria-hidden="true" />
              {currentOutfit.label}
            </figcaption>
            <div className="absolute bottom-5 right-5 flex items-center gap-2 sm:bottom-7 sm:right-7">
              <button
                type="button"
                onClick={showPreviousOutfit}
                className="grid size-10 place-items-center rounded-full border border-paper/25 bg-ink/82 text-paper backdrop-blur-md transition-colors hover:bg-gold hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                aria-label="Show previous outfit photo"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={showNextOutfit}
                className="grid size-10 place-items-center rounded-full border border-paper/25 bg-ink/82 text-paper backdrop-blur-md transition-colors hover:bg-gold hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                aria-label="Show next outfit photo"
              >
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
            <div className="relative mt-7 flex justify-center gap-2" aria-label="Choose outfit photo">
              {outfitSlides.map((slide, index) => (
                <button
                  key={slide.label}
                  type="button"
                  onClick={() => setOutfitSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${index === outfitSlide ? 'w-8 bg-gold' : 'w-2.5 bg-paper/30 hover:bg-paper/60'}`}
                  aria-label={`Show ${slide.label} photo`}
                  aria-current={index === outfitSlide ? 'true' : undefined}
                />
              ))}
            </div>
          </figure>
          <div className="order-1 mx-auto w-full max-w-5xl">
            <p className="section-kicker mb-6 text-orange">Bands</p>
            <h2 className="font-display max-w-[10ch] text-[clamp(3.7rem,7vw,7.2rem)] font-black leading-[0.82] tracking-[-0.055em]">Outfits for hire</h2>
            <div className="mt-10 max-w-[42rem] text-base leading-7 text-paper/72 sm:text-lg sm:leading-8">
              <p>Sharp suits. Tuned instruments. Just the sound you&apos;re looking for.</p>
              <p className="mt-4">The quartet is available for any event, wedding, party, or gathering — but a leaner lineup can be assembled for when the occasion calls for something more intimate.</p>
            </div>
          </div>
          <div className="order-3 mx-auto w-full max-w-5xl">
            <a href="#watch" className="mt-9 inline-flex items-center gap-2 rounded-full border border-gold/55 px-7 py-4 font-label text-xs font-bold uppercase tracking-[0.15em] text-paper transition-colors hover:border-gold hover:bg-gold hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
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
              <p className="section-kicker text-[#e1cb37]">Watch / listen</p>
              <h2 className="font-display mt-5 text-[clamp(3.7rem,7vw,7.5rem)] font-black leading-[0.82] tracking-[-0.055em]">Hear it in the room.</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-paper/60 sm:text-lg">The fastest way to understand Pino Noir is to hear the band play.</p>
          </div>

          <figure className="mt-14 overflow-hidden rounded-[2rem] border border-paper/15 bg-[#101114] shadow-[0_40px_100px_rgb(0_0_0/45%)]">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/images/pino-noir-sizzle-first-frame.jpg"
              className="aspect-video w-full bg-black object-contain"
              aria-label="Pino Noir Quartet — live performance video"
            >
              <source src="/media/pino-noir-sizzle-vol-2.mp4" type="video/mp4" />
              Your browser does not support embedded video.
            </video>
            <figcaption className="flex flex-col gap-2 border-t border-paper/15 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
              <div>
                <p className="font-display text-2xl font-bold">Pino Noir Quartet</p>
                <p className="mt-1 text-sm text-paper/48">Live performance reel</p>
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-[0.14em] text-mint hover:text-gold">
                  More on Instagram
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
                <a href={bandcampUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-[0.14em] text-gold hover:text-orange">
                  Listen on Bandcamp
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </figcaption>
          </figure>

          <div className="mt-8">
            <AudioPlayer />
          </div>
        </div>
      </section>

      <section id="hire-us" className="scroll-mt-24 bg-[#ffe7cc] px-5 py-24 text-ink sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div>
            <div>
              <p className="section-kicker text-teal">Hire Pino Noir</p>
              <h2 className="font-display mt-5 max-w-[13ch] text-[clamp(3.7rem,7vw,7.2rem)] font-black leading-[0.84] tracking-[-0.055em]">Bring Pino Noir to a space near you</h2>
            </div>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {offerings.map((offering) => {
              const Icon = offering.icon;
              return (
                <article key={offering.eyebrow} className={`group flex min-h-[32rem] flex-col justify-between rounded-[2rem] p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-9 ${offering.tone}`}>
                  <div>
                    <div className="flex items-center justify-between">
                      <p className={`section-kicker ${offering.labelAccent}`}>{offering.eyebrow}</p>
                      <Icon className={`size-6 ${offering.accent}`} aria-hidden="true" />
                    </div>
                    <h3 className="font-display mt-8 text-[clamp(2.5rem,4vw,4rem)] font-black leading-[0.9] tracking-[-0.045em]">{offering.title}</h3>
                    <p className="mt-7 text-base leading-7 opacity-72">{offering.body}</p>
                    {offering.detail && <p className="mt-5 font-display text-xl font-bold opacity-88">{offering.detail}</p>}
                  </div>
                  <a href="#book" className="mt-10 inline-flex w-fit items-center gap-2 border-b border-current pb-1 font-label text-xs font-bold uppercase tracking-[0.15em] transition-opacity hover:opacity-60">
                    {offering.cta}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </article>
              );
            })}
          </div>

          <figure className="relative mt-16 overflow-hidden rounded-[2rem] border-4 border-[#ffbdbd] bg-ink lg:mx-auto lg:w-[88%]">
            <button
              type="button"
              onClick={showNextHirePhoto}
              className="group block w-full focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-[#ffbdbd]"
              aria-label={`Show next Hire Pino Noir photo. Photo ${hireSlide + 1} of ${hireSlides.length}.`}
            >
              <img
                src={currentHirePhoto.src}
                alt={currentHirePhoto.alt}
                loading="lazy"
                className="aspect-[3/2] w-full object-contain"
              />
            </button>
            <figcaption className="pointer-events-none absolute bottom-5 left-5 rounded-full border border-[#ffbdbd]/45 bg-ink/82 px-4 py-2 font-label text-[0.64rem] font-bold uppercase tracking-[0.16em] text-paper backdrop-blur-md sm:bottom-7 sm:left-7" aria-live="polite">
              {hireSlide + 1} / {hireSlides.length}
            </figcaption>
            <div className="absolute bottom-5 right-5 flex items-center gap-2 sm:bottom-7 sm:right-7">
              <button
                type="button"
                onClick={showPreviousHirePhoto}
                className="grid size-10 place-items-center rounded-full border border-[#ffbdbd]/45 bg-ink/82 text-paper backdrop-blur-md transition-colors hover:bg-[#ffbdbd] hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffbdbd]"
                aria-label="Show previous Hire Pino Noir photo"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={showNextHirePhoto}
                className="grid size-10 place-items-center rounded-full border border-[#ffbdbd]/45 bg-ink/82 text-paper backdrop-blur-md transition-colors hover:bg-[#ffbdbd] hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffbdbd]"
                aria-label="Show next Hire Pino Noir photo"
              >
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
            <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 gap-2 sm:flex sm:bottom-7" aria-label="Choose Hire Pino Noir photo">
              {hireSlides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setHireSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${index === hireSlide ? 'w-8 bg-[#ffbdbd]' : 'w-2.5 bg-paper/35 hover:bg-paper/65'}`}
                  aria-label={`Show Hire Pino Noir photo ${index + 1}`}
                  aria-current={index === hireSlide ? 'true' : undefined}
                />
              ))}
            </div>
          </figure>

        </div>
      </section>

      <section id="book" className="scroll-mt-24 bg-[#fff1a8] px-5 py-24 text-ink sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-36 lg:self-start">
            <p className="section-kicker text-[#a0880d]">Bookings</p>
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
            <div className="flex flex-wrap gap-x-5 gap-y-3 sm:justify-end">
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-[0.15em] text-mint hover:text-gold">
                Instagram @_pinonoir_
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <a href={bandcampUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-[0.15em] text-gold hover:text-orange">
                Bandcamp
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
            <p className="text-sm text-paper/35">© 2026 Pino Noir · Los Angeles, CA</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
