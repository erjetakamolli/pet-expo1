import React, { useState } from 'react';
import AnimalCard from '../AnimalCard/Card';
import './Gallery.scss';

const Gallery = ({ pets }) => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [search, setSearch] = useState('');

  const filteredPets = pets.filter(pet => pet.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <section>
      <input 
        type="text" 
        placeholder="Search..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
      />
      <div className="gallery">
        {filteredPets.map(pet => (
          <AnimalCard key={pet.id} pet={pet} setSelectedPet={setSelectedPet} />
        ))}
      </div>
      {selectedPet && <PetPopup pet={selectedPet} setSelectedPet={setSelectedPet} />}
    </section>
  );
};

export default Gallery;

