import React, { useState } from 'react';
import AnimalCard from '../AnimalCard/Card';
import PetPopup from '../AnimalCard/PetPopup';
import Footer from '../Footer/Footer';
import './Gallery.scss';
import cat1 from '../../Images/cat1.jpg';
import cat2 from '../../Images/cat2.jpg';
import cat3 from '../../Images/cat3.jpg';
import cat4 from '../../Images/cat4.jpg';
import cat5 from '../../Images/cat5.jpg';
import cat6 from '../../Images/cat6.jpg';
import cat7 from '../../Images/cat7.jpg';
import cat8 from '../../Images/cat8.jpg';

const Cats = () => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [search, setSearch] = useState('');

  const cats = [
    { id: 1, name: 'Usa Shorthair', origin: 'USA', image: cat1, description: 'American Shorthairs are easy-going kitties known for their loving character.', color: 'Black, Gray' },
    { id: 2, name: 'Chausie', origin: 'Africa, Asia', image: cat2, description: 'Name Chausie derives from the Latin name "Felis Chaus" meaning "jungle cat".', color: 'Orange, Green' },
    { id: 3, name: 'Scottish Fold', origin: 'Scotland', image: cat3, description: 'Meet the only cat who has been described to resemble an owl.', color: 'Orange, Gray' },
    { id: 4, name: 'Korat', origin: 'Thailand', image: cat4, description: 'The Korat is a highly intelligent breed with ancient origins in Siam.', color: 'Black, Green' },
    { id: 5, name: 'Thai Siamese', origin: 'Thailand', image: cat5, description: 'Thai Siamese cats are known for their loyal and affectionate nature.', color: 'Black, Blue, White' },
    { id: 6, name: 'Maine Coon', origin: 'USA', image: cat6, description: 'Maine Coons are gentle giants with a loving, friendly, and sociable nature.', color: 'Black, Gray' },
    { id: 7, name: 'Domesti Shorthair', origin: 'Europe', image: cat7, description: 'The domestic shorhair is rather a cat of mixed ancestries.', color: 'Black, Orange' },
    { id: 8, name: 'Birman', origin: 'Myanmar', image: cat8, description: 'Birmans are friendly, loyal cats of high intelligence.', color: 'White, Blue' },
  ];

  const filteredCats = cats.filter(cat => cat.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <section className="cats-section">
        <h2>Cats Gallery 🐾</h2>
        <input 
          type="text" 
          placeholder="Search..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
        />
        <div className="gallery">
          {filteredCats.length > 0 ? (
            filteredCats.map(cat => (
              <AnimalCard key={cat.id} pet={cat} setSelectedPet={setSelectedPet} />
            ))
          ) : (
            <div className="no-results">No cats found with the name '{search}'.</div>
          )}
        </div>
        {selectedPet && <PetPopup pet={selectedPet} setSelectedPet={setSelectedPet} />}
      </section>
      <Footer />
    </>
  );
};

export default Cats;

