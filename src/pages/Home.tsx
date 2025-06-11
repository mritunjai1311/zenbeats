import React, { useEffect, useState } from 'react';
import sessions from '../data/sessions.json';
import SessionCard from '../components/SessionCard';

const getRandomSession = () => {
  const idx = Math.floor(Math.random() * sessions.length);
  return sessions[idx];
};

const Home: React.FC = () => {
  const [daily] = useState(() => getRandomSession());
  const popular = sessions.slice(0, 3);

  useEffect(() => {
    // Optionally, rotate daily session every 24h
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">Welcome to ZenBeats 🧘‍♂️</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-300">Find your calm, focus, or sleep with binaural beats.</p>
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Daily Recommendation</h2>
        <SessionCard
          title={daily.title}
          description={daily.description}
          duration={daily.duration}
          onPlay={() => {}}
        />
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Popular Sessions</h2>
        <div className="grid gap-4">
          {popular.map((s) => (
            <SessionCard
              key={s.id}
              title={s.title}
              description={s.description}
              duration={s.duration}
              onPlay={() => {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home; 