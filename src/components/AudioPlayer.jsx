import { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

export default function AudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0..1
  const [dur, setDur] = useState(0);
  const [cur, setCur] = useState(0);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onLoaded = () => setDur(a.duration || 0);
    const onTime = () => {
      setCur(a.currentTime || 0);
      setProgress(a.duration ? a.currentTime / a.duration : 0);
    };
    const onEnd = () => setIsPlaying(false);
    a.addEventListener('loadedmetadata', onLoaded);
    a.addEventListener('timeupdate', onTime);
    a.addEventListener('ended', onEnd);
    return () => {
      a.removeEventListener('loadedmetadata', onLoaded);
      a.removeEventListener('timeupdate', onTime);
      a.removeEventListener('ended', onEnd);
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (isPlaying) {
      a.pause();
      setIsPlaying(false);
    } else {
      a.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const seek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = Math.min(Math.max(x / rect.width, 0), 1);
    const a = audioRef.current;
    if (a && a.duration) {
      a.currentTime = a.duration * ratio;
    }
  };

  const fmt = (t) => {
    if (!isFinite(t)) return '0:00';
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="mx-auto mt-6 w-full max-w-md rounded-xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur">
      <audio ref={audioRef} src={src} preload="none" />
      <div className="flex items-center gap-4">
        <button
          onClick={toggle}
          className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-amber-300 to-rose-300 text-black shadow hover:brightness-105 active:scale-95"
          aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>
        <div className="flex-1">
          <div
            className="group h-2 w-full cursor-pointer overflow-hidden rounded-full bg-white/10"
            onClick={seek}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-300 via-yellow-300 to-rose-300 transition-[width]"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-indigo-100/80">
            <span>{fmt(cur)}</span>
            <span>{fmt(dur)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
