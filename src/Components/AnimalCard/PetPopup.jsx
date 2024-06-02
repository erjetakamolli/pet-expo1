import React from 'react';
import './Card.scss';

const PetPopup = ({ pet, setSelectedPet }) => {
  return (
    <div className="popup-overlay" onClick={() => setSelectedPet(null)}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <img src={pet.image} alt={pet.name} />
        <h2>{pet.name}</h2>
        <p>{pet.description}</p>
        <p><strong>Colors:</strong> {pet.color}</p>
        <p><strong>Origin:</strong> {pet.origin}</p>
      </div>
       <button className="popup-close" onClick={() => setSelectedPet(null)}>Close</button>
    </div>
  );
};

export default PetPopup;