import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Sparkle,
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
    starColor: 'text-magenta',
  },
  {
    src: '/images/pino-noir-trio-rooftop.jpg',
    alt: 'Pino Noir trio performing with violin, upright bass, and guitar on a rooftop',
    label: 'The trio',
    starColor: 'text-violet',
  },
  {
    src: '/images/pino-noir-duo-vocals.jpg',
    alt: 'Pino Noir guitarist and vocalist performing together in black and white',
    label: 'Duo with vocals',
    starColor: 'text-magenta',
  },
  {
    src: '/images/luca-gold-curtain.jpg',
    alt: 'Luca Pino playing guitar in a white suit in front of a gold curtain',
    label: 'Solo guitar',
    starColor: 'text-violet',
  },
] as const;

function StarDotBand({ className }: { className: string }) {
  return (
    <div className={`pointer-events-none absolute z-20 flex items-center justify-between ${className}`} aria-hidden="true">
      {Array.from({ length: 11 }, (_, index) => (
        index % 2 === 0
          ? <Sparkle key={index} className="size-4 fill-magenta text-magenta stroke-[1.5] sm:size-[1.15rem]" />
          : <span key={index} className="size-1.5 rotate-45 rounded-[1px] bg-violet sm:size-2" />
      ))}
    </div>
  );
}

export default function App() {
  const [outfitSlide, setOutfitSlide] = useState(0);
  const currentOutfit = outfitSlides[outfitSlide];
  const showPreviousOutfit = () => setOutfitSlide((current) => (current - 1 + outfitSlides.length) % outfitSlides.length);
  const showNextOutfit = () => setOutfitSlide((current) => (current + 1) % outfitSlides.length);
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-violet/30 bg-ink/95 backdrop-blur-xl">
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
            <a href="#watch" className="nav-link">Listen</a>
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
            className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-magenta px-4 font-label text-[0.66rem] font-bold uppercase tracking-[0.12em] text-white transition-all hover:-translate-y-0.5 hover:bg-violet focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet sm:px-5 sm:text-[0.72rem] sm:tracking-[0.13em]"
          >
            <span>Book Now</span>
            <ArrowDown className="size-3.5 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </header>

      <section id="top" className="hero-stage relative grid min-h-svh bg-ink lg:grid-cols-[1.05fr_0.95fr]">
        <div className="hero-copy-panel relative z-10 flex items-center px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-40 lg:px-12 lg:pb-24 lg:pt-36">
          <div className="mx-auto w-full max-w-3xl lg:mx-0">
            <p className="section-kicker mb-6 text-violet">About</p>
            <h1 className="font-display max-w-[11ch] text-[clamp(4rem,9vw,8.8rem)] font-black leading-[0.82] tracking-[-0.055em] text-paper">
              Pino Noir.
            </h1>
            <p className="mt-8 max-w-[42rem] text-base leading-7 text-paper/72 sm:text-lg sm:leading-8">
              Pino Noir is a red-hot &apos;electric&apos; gypsy jazz band, led by Los Angeles born guitarist Luca Pino. Their aim is to revitalize the atmosphere of the underground jazz scene in 1930&apos;s Paris, with nothing but virtuosity and panache. Available to hire for any occasion.
            </p>
            <figure className="mt-8 max-w-[42rem] overflow-hidden rounded-[1.5rem] border border-violet/35 bg-night shadow-[0_30px_80px_rgb(0_0_0/40%)]">
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
            </figure>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a href="#book" className="primary-cta">
                Check availability
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <figure className="relative mx-5 mb-16 min-h-[34rem] self-center overflow-hidden rounded-[2rem] bg-ink shadow-[0_30px_90px_rgb(0_0_0/45%)] ring-1 ring-magenta/60 sm:mx-8 sm:min-h-[38rem] lg:mx-8 lg:mb-0 lg:h-[calc(100svh-10rem)] lg:min-h-0 lg:max-h-[56rem] lg:rounded-[2.5rem]">
          <StarDotBand className="inset-x-7 top-1.5 h-5 sm:inset-x-10 sm:top-2" />
          <StarDotBand className="inset-x-7 bottom-1.5 h-5 sm:inset-x-10 sm:bottom-2" />
          <div className="absolute inset-x-3 bottom-8 top-8 overflow-hidden rounded-[1.5rem] bg-ink ring-1 ring-violet/55 sm:inset-x-4 sm:bottom-10 sm:top-10 lg:rounded-[2rem]">
            <img
              src="/images/luca-leopard-room.jpg"
              alt="Luca Pino reclining with a guitar in a leopard-print room"
              className="absolute inset-0 h-full w-full object-cover object-[center_44%]"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/10 lg:bg-gradient-to-r lg:from-ink/55 lg:via-transparent lg:to-transparent" />
          </div>
        </figure>
      </section>

      <section id="about" className="about-stage scroll-mt-24 px-5 py-24 text-paper sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-14">
          <figure className="relative order-2 mx-auto w-full max-w-3xl overflow-hidden rounded-[2.5rem] bg-ink px-3 pb-16 pt-8 shadow-[0_35px_90px_rgb(0_0_0/45%)] ring-1 ring-magenta/60 sm:px-4 sm:pb-20 sm:pt-10" aria-roledescription="carousel" aria-label="Pino Noir performance outfits">
            <StarDotBand className="inset-x-7 top-1.5 h-5 sm:inset-x-10 sm:top-2" />
            <StarDotBand className="inset-x-7 bottom-1.5 h-5 sm:inset-x-10 sm:bottom-2" />
            <button
              type="button"
              onClick={showNextOutfit}
              className="group relative block w-full overflow-hidden rounded-[1.5rem] text-left ring-1 ring-violet/55 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet sm:rounded-[2rem]"
              aria-label={`Show next photo. Currently showing ${currentOutfit.label}.`}
            >
              <img
                src={currentOutfit.src}
                alt={currentOutfit.alt}
                loading="lazy"
                className="aspect-[3/2] w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.015]"
              />
            </button>
            <figcaption className="pointer-events-none absolute bottom-[4.75rem] left-5 flex items-center gap-2 rounded-full border border-magenta/45 bg-ink/82 px-4 py-2 font-label text-[0.64rem] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:bottom-24 sm:left-7" aria-live="polite">
              <Sparkles className={`size-3.5 ${currentOutfit.starColor}`} aria-hidden="true" />
              {currentOutfit.label}
            </figcaption>
            <div className="absolute bottom-[4.75rem] right-5 flex items-center gap-2 sm:bottom-24 sm:right-7">
              <button
                type="button"
                onClick={showPreviousOutfit}
                className="grid size-10 place-items-center rounded-full border border-violet/60 bg-ink/82 text-white backdrop-blur-md transition-colors hover:border-magenta hover:bg-magenta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
                aria-label="Show previous outfit photo"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={showNextOutfit}
                className="grid size-10 place-items-center rounded-full border border-violet/60 bg-ink/82 text-white backdrop-blur-md transition-colors hover:border-magenta hover:bg-magenta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
                aria-label="Show next outfit photo"
              >
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 justify-center gap-2" aria-label="Choose outfit photo">
              {outfitSlides.map((slide, index) => (
                <button
                  key={slide.label}
                  type="button"
                  onClick={() => setOutfitSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${index === outfitSlide ? 'w-8 bg-magenta' : 'w-2.5 bg-violet/45 hover:bg-violet'}`}
                  aria-label={`Show ${slide.label} photo`}
                  aria-current={index === outfitSlide ? 'true' : undefined}
                />
              ))}
            </div>
          </figure>
          <div className="order-1 mx-auto w-full max-w-5xl">
            <p className="section-kicker mb-6 text-magenta">Bands</p>
            <h2 className="font-display max-w-[10ch] text-[clamp(3.7rem,7vw,7.2rem)] font-black leading-[0.82] tracking-[-0.055em]">Outfits for hire</h2>
            <div className="mt-10 max-w-[42rem] text-base leading-7 text-paper/72 sm:text-lg sm:leading-8">
              <p>The quartet is available for any event, wedding, party, or gathering — and a smaller troupe can be assembled for when the occasion calls for something more intimate.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="watch" className="scroll-mt-24 bg-night px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] lg:items-center lg:gap-14">
            <div>
              <p className="section-kicker text-violet">Listen</p>
              <h2 className="font-display mt-5 text-[clamp(3.7rem,7vw,7.5rem)] font-black leading-[0.82] tracking-[-0.055em]">&quot;The Lafayette Sessions&quot;</h2>
            </div>
            <figure className="mx-auto w-full max-w-[20rem] rounded-[2rem] border border-magenta/70 bg-black p-2 shadow-[0_24px_70px_rgb(0_0_0/45%)] ring-1 ring-violet/30 sm:max-w-[22rem] lg:mx-0 lg:max-w-none lg:justify-self-end">
              <img
                src="/images/lafayette-sessions-promo.png"
                alt="The Lafayette Sessions artwork featuring Pino Noir musicians in magenta and violet"
                className="aspect-square w-full rounded-[1.55rem] object-cover"
              />
            </figure>
          </div>

          <div className="mt-14">
            <AudioPlayer />
          </div>
        </div>
      </section>

      <section id="book" className="booking-stage scroll-mt-24 px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-36 lg:self-start">
            <p className="section-kicker text-magenta">Bookings</p>
            <h2 className="font-display mt-5 max-w-[8ch] text-[clamp(4rem,7vw,7.5rem)] font-black leading-[0.82] tracking-[-0.055em]">Have a date in mind?</h2>
            <figure className="mt-9 hidden w-full max-w-[18rem] rounded-[1.75rem] border border-magenta/55 bg-night p-2 shadow-[0_24px_70px_rgb(0_0_0/38%)] ring-1 ring-violet/25 lg:block">
              <img
                src="/images/booking-gypsy-wagon.jpg"
                alt="A guitar resting outside a brightly painted red gypsy wagon"
                loading="lazy"
                className="aspect-square w-full rounded-[1.3rem] object-cover"
              />
            </figure>
          </div>
          <BookingForm />
        </div>
      </section>

      <footer className="border-t border-violet/25 bg-ink px-5 py-14 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-end gap-5">
            <img src="/brand/pino-noir-wordmark.png" alt="Pino Noir" className="h-24 w-auto" />
            <p className="mb-2 font-label text-[0.66rem] font-bold uppercase leading-5 tracking-[0.15em] text-paper/42">Los Angeles<br />Gypsy Jazz</p>
          </div>
          <div className="flex flex-col gap-4 sm:items-end">
            <div className="flex flex-wrap gap-x-5 gap-y-3 sm:justify-end">
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-[0.15em] text-violet transition-colors hover:text-magenta">
                Instagram @_pinonoir_
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <a href={bandcampUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-[0.15em] text-magenta transition-colors hover:text-violet">
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
