import React, { useState } from 'react';
import AnimalCard from '../AnimalCard/Card';
import PetPopup from '../AnimalCard/PetPopup';
import Footer from '../Footer/Footer';
import './Gallery.scss';
import dog1 from '../../Images/dog1.jpg';
import dog2 from '../../Images/dog2.jpg';
import dog3 from '../../Images/dog3.jpg';
import dog4 from '../../Images/dog4.jpg';
import dog5 from '../../Images/dog5.jpg';
import dog6 from '../../Images/dog6.jpg';
import dog7 from '../../Images/dog7.jpg';
import dog8 from '../../Images/dog8.jpg';

const Dogs = () => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [search, setSearch] = useState('');

  const dogs = [
    { id: 1, name: 'Akita Inu', origin: 'Japan', image: dog1, description: 'Is a powerful and majestic dog breed that originated in Japan.', color: 'Orange, White' },
    { id: 2, name: 'Alaskan Malamute', origin: 'Northwestern Alaska', image: dog2, description: 'Is a large breed of domestic dog originally bred for their strength.', color: 'White, Gray' },
    { id: 3, name: 'Belgian Sheepdog', origin: 'Belgium', image: dog3, description: 'Is one of the four varieties of sheepdogs native to Belgium.', color: 'Black' },
    { id: 4, name: 'Eskimo Dog', origin: 'Germany', image: dog4, description: 'Characterized by their fox-like appearance with a thick double coat.', color: 'White' },
    { id: 5, name: 'Alaskan Klee', origin: 'Alaska', image: dog5, description: 'Is a relatively recent breed that was first developed in the 1970s in Alaska.', color: 'Black, White' },
    { id: 6, name: 'Shepherd', origin: 'Spain', image: dog6, description: 'These are descendants from a line of Europe’s finest herders.', color: 'Black, White' },
    { id: 7, name: 'Beagle', origin: 'England', image: dog7, description: 'Beagle as we know it today was developed in the 19th century in England.', color: 'Orange, White' },
    { id: 8, name: 'Volpino Italiano', origin: 'Italy', image: dog8, description: 'Is an ancient breed that dates back to at least the 15th century.', color: 'Orange, White' },
  ];

  const filteredDogs = dogs.filter(dog => dog.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
    <section className="dogs-section">
      <h2>Dogs Gallery 🦴</h2>
      <input 
        type="text" 
        placeholder="Search..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
      />
      <div className="gallery">
        {filteredDogs.length > 0 ? (
          filteredDogs.map(dog => (
            <AnimalCard key={dog.id} pet={dog} setSelectedPet={setSelectedPet} />
          ))
        ) : (
          <div className="no-results">No dogs found with the name '{search}'.</div>
        )}
      </div>
      {selectedPet && <PetPopup pet={selectedPet} setSelectedPet={setSelectedPet} />}
    </section>
     <Footer />
    </>
  );
};

export default Dogs;
