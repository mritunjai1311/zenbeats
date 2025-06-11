import React, { useState } from 'react';
import sessions from '../data/sessions.json';
import SessionCard from '../components/SessionCard';
import CategoryTabs from '../components/CategoryTabs';

const categories = ['Focus', 'Relax', 'Sleep', 'Anxiety'];

const Library: React.FC = () => {
  const [selected, setSelected] = useState(categories[0]);
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('favorites') || '[]');
    } catch {
      return [];
    }
  });

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const updated = prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id];
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  };

  const filtered = sessions.filter((s) => s.category === selected);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Session Library</h1>
      <CategoryTabs categories={categories} selected={selected} onSelect={setSelected} />
      <div className="grid gap-4">
        {filtered.map((s) => (
          <SessionCard
            key={s.id}
            title={s.title}
            description={s.description}
            duration={s.duration}
            audio={s.audio}
            isFavorite={favorites.includes(s.id)}
            onFavoriteToggle={() => toggleFavorite(s.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Library; 