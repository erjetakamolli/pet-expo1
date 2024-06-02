import React from 'react';
import './Card.scss';

const AnimalCard = ({ pet, setSelectedPet }) => {
  return (
    <div className="animal-card" onClick={() => setSelectedPet(pet)}>
      <img src={pet.image} alt={pet.name} />
      <h3>{pet.name}</h3>
      <p>{pet.origin}</p>
      </div>
  );
};

export default AnimalCard;
