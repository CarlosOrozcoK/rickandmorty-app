import React, { useState } from 'react';
import { useCharacters } from '../hooks/useCharacters';
import { Pagination } from './Pagination';
import { CharacterGallery } from './CharacterGallery'; 

export const RickApp = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState('All');

  const { characters, loading, totalPages, availableSpecies } = useCharacters(searchTerm, selectedSpecies, page);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  const handleSpeciesChange = (e) => {
    setSelectedSpecies(e.target.value);
    setPage(1);
  };

  return (
    <div className="container">
      <h1>Rick and Morty Characters</h1>

      <input
        type="text"
        placeholder="Search characters..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="form-control mb-3"
      />

      <div className="form-group">
        <label htmlFor="species-select">Filter by species:</label>
        <select
          id="species-select"
          className="form-control mb-3"
          value={selectedSpecies}
          onChange={handleSpeciesChange}
        >
          {availableSpecies.map((species) => (
            <option key={species} value={species}>
              {species}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <CharacterGallery characters={characters} /> 
      )}

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
};