import React from 'react';

const CharacterGallery = ({ characters }) => {
  return (
    <div className="character-gallery">
      {characters.map((character) => (
        <div key={character.id} className="character-card">
          <img src={character.image} alt={character.name} />
          <h3>{character.name}</h3>
          <p>{character.species}</p>
        </div>
      ))}
    </div>
  );
};

export default CharacterGallery;
