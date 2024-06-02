import React from 'react';
import './Categorysection.scss'; 
import catsImage from '../../Images/catcategory.jpg';
import dogsImage from '../../Images/dogcategory.jpg';
import birdsImage from '../../Images/birdcategory.jpg';

const BlogSection = () => {
    return (
        <div className="blog-section">
            <h2>Our Categories</h2>
            <div className="blog-gallery">
                <div className="gallery-item">
                    <a href="/cats">
                        <img src={catsImage} alt="Cats" />
                        <div className="overlay">Cats</div>
                    </a>
                </div>
                <div className="gallery-item">
                    <a href="/dogs">
                        <img src={dogsImage} alt="Dogs" />
                        <div className="overlay">Dogs</div>
                    </a>
                </div>
                <div className="gallery-item">
                    <a href="/birds">
                        <img src={birdsImage} alt="Birds" />
                        <div className="overlay">Birds</div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
