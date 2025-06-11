import React, { useState } from 'react';
import AudioPlayer from './AudioPlayer';

interface SessionCardProps {
  title: string;
  description: string;
  duration: number;
  audio?: string;
  onPlay?: () => void;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
}

const SessionCard: React.FC<SessionCardProps> = ({ title, description, duration, audio, onPlay, isFavorite, onFavoriteToggle }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  const handlePlay = () => {
    setShowPlayer(true);
    if (onPlay) onPlay();
  };

  const handleClose = () => setShowPlayer(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col gap-2 relative">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">{title}</h3>
        {onFavoriteToggle && (
          <button onClick={onFavoriteToggle} className="text-yellow-400 text-xl">
            {isFavorite ? '★' : '☆'}
          </button>
        )}
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-gray-500">{duration} min</span>
        {audio ? (
          <button onClick={handlePlay} className="px-3 py-1 bg-blue-500 text-white rounded text-sm">Play</button>
        ) : null}
      </div>
      {showPlayer && audio && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-lg relative w-full max-w-md mx-2">
            <button onClick={handleClose} className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl">×</button>
            <AudioPlayer src={audio} title={title} onEnded={handleClose} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SessionCard; 