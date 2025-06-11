import React, { useEffect, useState } from 'react';
import sessions from '../data/sessions.json';
import SessionCard from '../components/SessionCard';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      setFavorites(JSON.parse(localStorage.getItem('favorites') || '[]'));
    } catch {
      setFavorites([]);
    }
  }, []);

  const favoriteSessions = sessions.filter((s) => favorites.includes(s.id));

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Favorites</h1>
      {favoriteSessions.length === 0 ? (
        <p className="text-gray-500">No favorites yet. Add some from the library!</p>
      ) : (
        <div className="grid gap-4">
          {favoriteSessions.map((s) => (
            <SessionCard
              key={s.id}
              title={s.title}
              description={s.description}
              duration={s.duration}
              audio={s.audio}
              isFavorite={true}
              onFavoriteToggle={() => {}}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites; 