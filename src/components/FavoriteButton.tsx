import React from 'react';

interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isFavorite, onToggle }) => (
  <button onClick={onToggle} className="text-yellow-400 text-xl" aria-label="Toggle favorite">
    {isFavorite ? '★' : '☆'}
  </button>
);

export default FavoriteButton; 