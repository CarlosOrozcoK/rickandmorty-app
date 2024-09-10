import React from 'react';

export const CharacterGallery = ({ characters }) => {
  if (characters.length === 0) {
    return <p>No characters found</p>;
  }

  return (
    <div className="row">
      {characters.map((character) => (
        <div key={character.id} className="col-md-3 mb-4">
          <div className="card">
            <img src={character.image} alt={character.name} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <p className="card-text">{character.species}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
