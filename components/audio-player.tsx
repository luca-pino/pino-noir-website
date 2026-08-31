'use client';

import { useRef, useState } from 'react';
import { Pause, Play, SkipBack, SkipForward, Volume2 } from 'lucide-react';

import { Button } from '@/components/ui/button';

const tracks = [
  { title: 'Snake Rag', src: '/media/snake-rag.mp3', duration: 201 },
  { title: 'Latcho Drom', src: '/media/latcho-drom.mp3', duration: 109 },
  { title: 'Please', src: '/media/please.mp3', duration: 235 },
] as const;

function formatTime(value: number) {
  if (!Number.isFinite(value)) return '0:00';
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60)
    .toString()
    .padStart(2, '0');
  return `${minutes}:${seconds}`;
}

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const activeTrack = tracks[activeIndex];

  const playTrack = async (index: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (index !== activeIndex) {
      audio.src = tracks[index].src;
      audio.currentTime = 0;
      setCurrentTime(0);
      setActiveIndex(index);
    }

    if (index === activeIndex && isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const chooseTrack = (index: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.src = tracks[index].src;
    audio.currentTime = 0;
    setCurrentTime(0);
    setActiveIndex(index);
    setIsPlaying(false);
  };

  const seek = (value: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  return (
    <section aria-label="Pino Noir recordings" className="overflow-hidden rounded-[2rem] border border-paper/15 bg-[#11100e]">
      <audio
        ref={audioRef}
        src={tracks[0].src}
        preload="metadata"
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
        }}
      />

      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-b border-paper/15 p-5 sm:p-8 lg:border-b-0 lg:border-r">
          <p className="font-label text-[0.68rem] font-bold uppercase tracking-[0.18em] text-mint">Three from the band</p>
          <div className="mt-5 divide-y divide-paper/12">
            {tracks.map((track, index) => {
              const selected = activeIndex === index;
              const playing = selected && isPlaying;

              return (
                <div key={track.title} className="flex items-center gap-4 py-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon-lg"
                    onClick={() => playTrack(index)}
                    aria-label={`${playing ? 'Pause' : 'Play'} ${track.title}`}
                    className={`size-12 rounded-full border-paper/25 bg-transparent text-paper hover:border-gold hover:bg-gold hover:text-ink ${selected ? 'border-gold text-gold' : ''}`}
                  >
                    {playing ? <Pause className="size-4 fill-current" /> : <Play className="ml-0.5 size-4 fill-current" />}
                  </Button>
                  <button
                    type="button"
                    onClick={() => chooseTrack(index)}
                    className="min-w-0 flex-1 text-left focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
                  >
                    <span className={`block font-display text-2xl font-bold ${selected ? 'text-gold' : 'text-paper'}`}>{track.title}</span>
                    <span className="font-label text-[0.66rem] font-bold uppercase tracking-[0.14em] text-paper/45">
                      Pino Noir · {formatTime(track.duration)}
                    </span>
                  </button>
                  <span className="font-display text-xl text-paper/25">0{index + 1}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex min-h-80 flex-col justify-between bg-plum p-6 sm:p-9">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="font-label text-[0.68rem] font-bold uppercase tracking-[0.18em] text-paper/55">Now selected</p>
              <p className="mt-2 font-display text-[clamp(2.5rem,5vw,5rem)] font-black leading-none tracking-[-0.04em] text-paper">
                {activeTrack.title}
              </p>
            </div>
            <Volume2 className="mt-1 size-5 text-mint" aria-hidden="true" />
          </div>

          <div className="mt-12">
            <label htmlFor="song-progress" className="sr-only">
              Seek through {activeTrack.title}
            </label>
            <input
              id="song-progress"
              type="range"
              min="0"
              max={activeTrack.duration}
              step="1"
              value={Math.min(currentTime, activeTrack.duration)}
              onChange={(event) => seek(Number(event.target.value))}
              className="audio-range w-full"
            />
            <div className="mt-2 flex justify-between font-label text-[0.66rem] font-bold uppercase tracking-[0.12em] text-paper/45">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(activeTrack.duration)}</span>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <Button
                type="button"
                variant="ghost"
                size="icon-lg"
                onClick={() => chooseTrack((activeIndex - 1 + tracks.length) % tracks.length)}
                aria-label="Select previous track"
                className="rounded-full text-paper/65 hover:bg-paper/10 hover:text-paper"
              >
                <SkipBack className="size-5 fill-current" />
              </Button>
              <Button
                type="button"
                size="icon-lg"
                onClick={() => playTrack(activeIndex)}
                aria-label={`${isPlaying ? 'Pause' : 'Play'} ${activeTrack.title}`}
                className="size-16 rounded-full bg-gold text-ink hover:bg-parchment"
              >
                {isPlaying ? <Pause className="size-6 fill-current" /> : <Play className="ml-1 size-6 fill-current" />}
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon-lg"
                onClick={() => chooseTrack((activeIndex + 1) % tracks.length)}
                aria-label="Select next track"
                className="rounded-full text-paper/65 hover:bg-paper/10 hover:text-paper"
              >
                <SkipForward className="size-5 fill-current" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
