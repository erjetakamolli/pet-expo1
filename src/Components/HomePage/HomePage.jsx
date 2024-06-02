import React from 'react';
import BackgroundSlider from '../BackgroundSlider/Backgroundslider';
import BlogSection from '../CategorySection/Categorysection';
import About from '../About/About'; 
import ReviewsSection from '../ReviewsSection/Reviewssection';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="page-container">
         <BackgroundSlider />
         <BlogSection /> 
         <About />
         <ReviewsSection />
         <ContactUs />
         <Footer />
    </div>
  );
};

export default HomePage;


