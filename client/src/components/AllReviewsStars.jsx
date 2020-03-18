/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React from 'react';

const AllReviewsStars = ({
  ratings: { overall, cleanliness, communication, checkin, accuracy, location, value },
  numberOfReviews
}) => (
  <div>
    <div id="all-rating-average">
      <span>
        <img
          id="star-image"
          src="https://pngimage.net/wp-content/uploads/2018/06/pink-star-png-1.png"
          width="20px"
          height="20px"
          alt="star"
        />
        {overall} ({numberOfReviews} reviews)
      </span>
    </div>
    <div id="show-all-stars">
      <div className="all-reviews-rating">
        <span className="all-reviews-star-title">Cleanliness</span>
        <span className="all-reviews-star-value">{cleanliness}</span>
        <div className="progress-bar-all-reviews">
          <div style={{ width: `${cleanliness * 1.2}em` }} />
        </div>
      </div>
      <div className="all-reviews-rating">
        <span className="all-reviews-star-title">Accuracy</span>
        <span className="all-reviews-star-value">{accuracy}</span>
        <div className="progress-bar-all-reviews">
          <div style={{ width: `${accuracy * 1.2}em` }} />
        </div>
      </div>
      <div className="all-reviews-rating">
        <span className="all-reviews-star-title">Communication</span>
        <span className="all-reviews-star-value">{communication}</span>
        <div className="progress-bar-all-reviews">
          <div style={{ width: `${communication * 1.2}em` }} />
        </div>
      </div>
      <div className="all-reviews-rating">
        <span className="all-reviews-star-title">Location</span>
        <span className="all-reviews-star-value">{location}</span>
        <div className="progress-bar-all-reviews">
          <div style={{ width: `${location * 1.2}em` }} />
        </div>
      </div>
      <div className="all-reviews-rating">
        <span className="all-reviews-star-title">Check-in</span>
        <span className="all-reviews-star-value">{checkin}</span>
        <div className="progress-bar-all-reviews">
          <div style={{ width: `${checkin * 1.2}em` }} />
        </div>
      </div>
      <div className="all-reviews-rating">
        <span className="all-reviews-star-title">Value</span>
        <span className="all-reviews-star-value">{value}</span>
        <div className="progress-bar-all-reviews">
          <div style={{ width: `${value * 1.2}em` }} />
        </div>
      </div>
    </div>
  </div>
);

export default AllReviewsStars;

// overall={this.state.overallRating}
// cleanliness={this.state.cleanlinessRating}
// communication={this.state.communicationRating}
// checkin={this.state.checkInRating}
// accuracy={this.state.accuracyRating}
// location={this.state.locationRating}
// value={this.state.valueRating}
