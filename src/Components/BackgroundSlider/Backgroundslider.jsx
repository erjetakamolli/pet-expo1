import React, { useState, useEffect } from 'react';
import './BackgroundSlider.scss';
import image1 from '../../Images/image1.jpg';
import image2 from '../../Images/image2.jpg';
import image3 from '../../Images/image3.jpg';

const images = [image1, image2, image3];
const texts = [
  {
    main: "HAVE YOU FALLEN LOVE WITH PETS?",
    extra: "Explore more about how pets can change your life...",
    link: "#about"
  },
  {
    main: "We will help you to find the best pet for your choice!",
    extra: "",
    link: ""
  },
  {
    main: "Explore and find a pet and fall in love with them.",
    extra: "",
    link: ""
  }
];

const BackgroundSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState([]);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = images.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = image;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        setPreloadedImages(images);
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };

    preloadImages();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="background-slider">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${preloadedImages[currentIndex] || images[currentIndex]})` }}
      >
        <div className="text-overlay">
          <h2>{texts[currentIndex].main}</h2>
          {texts[currentIndex].extra && <p>{texts[currentIndex].extra}</p>}
          {texts[currentIndex].link && (
            <a href={texts[currentIndex].link} className="read-more-button">Read More</a>
          )}
        </div>
      </div>
      <button className="prev" onClick={handlePrevious}>❮</button>
      <button className="next" onClick={handleNext}>❯</button>
    </div>
  );
};

export default BackgroundSlider;
