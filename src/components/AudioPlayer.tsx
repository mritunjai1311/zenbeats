import React, { useRef, useState, useEffect } from 'react';

interface AudioPlayerProps {
  src: string;
  title?: string;
  onEnded?: () => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, title, onEnded }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateTime = () => setCurrentTime(audio.currentTime);
    const setAudioDuration = () => setDuration(audio.duration);
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', setAudioDuration);
    audio.addEventListener('ended', () => setIsPlaying(false));
    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', setAudioDuration);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audio) audio.volume = newVolume;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const newTime = parseFloat(e.target.value);
    if (audio) audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full flex flex-col items-center gap-2 p-4 bg-white dark:bg-gray-800 rounded shadow">
      {title && <div className="font-semibold mb-2">{title}</div>}
      <audio ref={audioRef} src={src} preload="auto" onEnded={onEnded} />
      <div className="flex items-center gap-2">
        <button onClick={togglePlay} className="px-3 py-1 bg-blue-500 text-white rounded">
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
      </div>
      <input
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        onChange={handleSeek}
        className="w-full accent-blue-500"
        step="0.01"
      />
      <div className="flex items-center gap-2 w-full">
        <span className="text-xs">Volume</span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeChange}
          className="flex-1 accent-blue-500"
        />
      </div>
    </div>
  );
};

export default AudioPlayer; 