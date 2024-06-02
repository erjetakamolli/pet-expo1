import React, { useState } from 'react';
import AnimalCard from '../AnimalCard/Card';
import PetPopup from '../AnimalCard/PetPopup';
import Footer from '../Footer/Footer';
import './Gallery.scss';
import bird1 from '../../Images/bird1.jpg';
import bird2 from '../../Images/bird2.jpg';
import bird3 from '../../Images/bird3.jpg';
import bird4 from '../../Images/bird4.jpg';
import bird5 from '../../Images/bird5.jpg';
import bird6 from '../../Images/bird6.jpg';
import bird7 from '../../Images/bird7.jpg';
import bird8 from '../../Images/bird8.jpg';

const Birds = () => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [search, setSearch] = useState('');

  const birds = [
    { id: 1, name: 'Canary', origin: 'Islands', image: bird1, description: 'The canary has been a favorite among bird keepers for hundreds of years.', color: 'Yellow, Gray' },
    { id: 2, name: 'Crimson Rosella', origin: 'Australia', image: bird2, description: 'The crimson rosella’s colors are eye-catching.', color: 'Red, Blue' },
    { id: 3, name: 'Hahns Macaw', origin: 'Venezuela', image: bird3, description: 'A Hahn’s macaw’s personality is much like that of its larger macaw cousins.', color: 'Green, Red' },
    { id: 4, name: 'Jenday Conure', origin: 'Brazil', image: bird4, description: 'Jenday conures have a reputation for being a little more laid back.', color: 'Yellow, Orange' },
    { id: 5, name: 'Owl Finch', origin: 'Mexico', image: bird5, description: 'These are curious and social little birds.', color: 'White, Gray' },
    { id: 6, name: 'Pionus', origin: 'Central America', image: bird6, description: 'Don’t overlook the white-capped Pionus parrot as an companion', color: 'White, Blue' },
    { id: 7, name: 'Pionus Parrot', origin: 'USA', image: bird7, description: 'The Pionus parrot is the best kept secret of the bird world.', color: 'Green, Blue' },
    { id: 8, name: 'Scarlet Macaw', origin: 'South America', image: bird8, description: 'The scarlet is a “sassy” bird, filled with energy and personality.', color: 'Blue, Red' },    
  ];

  const filteredBirds = birds.filter(bird => bird.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
    <section className="birds-section">
      <h2>Birds Gallery 🕊️</h2>
      <input 
        type="text" 
        placeholder="Search..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
      />
      <div className="gallery">
        {filteredBirds.length > 0 ? (
          filteredBirds.map(bird => (
            <AnimalCard key={bird.id} pet={bird} setSelectedPet={setSelectedPet} />
          ))
        ) : (
          <div className="no-results">No birds found with the name '{search}'.</div>
        )}
      </div>
      {selectedPet && <PetPopup pet={selectedPet} setSelectedPet={setSelectedPet} />}
    </section>
     <Footer />
    </>
  );
};

export default Birds;

