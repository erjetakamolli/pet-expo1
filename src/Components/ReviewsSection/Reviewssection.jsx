import React from "react";
import "./ReviewsSection.scss";

const ReviewsSection = () => {
  return (
    <div className="reviews-section">
      <h2>Reviews</h2>
      <div className="reviews-container">
        <div className="review-item">
          <div className="quote-icon">“</div>
          <p>
            I love their work.The pets are lovely.<br></br>
            I will recommend it!
          </p>
          <p className="review-author">"Miky"</p>
        </div>
        <div className="review-item">
          <div className="quote-icon">“</div>
          <p>
            Everything is fabulous.I will recommend 
            <br></br>the Pet Lovers to my friends.
          </p>
          <p className="review-author">"Luke"</p>
        </div>
        <div className="review-item">
          <div className="quote-icon">“</div>
          <p>
            Everything was amazing.I can't wait<br></br> for new pets
            to be added.
          </p>
          <p className="review-author">"Spot"</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;