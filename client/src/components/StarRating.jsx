/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React from 'react';

const StarRating = ({
  ratings: { overall, cleanliness, communication, checkin, accuracy, location, value },
  numberOfReviews
}) => {
  return (
    <div>
      <div id="rating-average">
        <span>
          <img
            id="star-image"
            src="https://i.dlpng.com/static/png/375530_preview.png"
            width="20px"
            height="20px"
            alt="star"
          />
          {overall} ({numberOfReviews} reviews)
        </span>
      </div>
      <div id="star-rating-bars">
        <div className="rating-bar">
          <span className="rating-titles">Cleanliness</span>
          <span className="rating-value">{cleanliness}</span>
          <div className="progress-bar">
            <div style={{ width: `${cleanliness * 2}em` }} />
          </div>
        </div>
        <div className="rating-bar">
          <span className="rating-titles">Communication</span>
          <span className="rating-value">{communication}</span>
          <div className="progress-bar">
            <div style={{ width: `${communication * 2}em` }} />
          </div>
        </div>
        <div className="rating-bar">
          <span className="rating-titles">Check-in</span>
          <span className="rating-value">{checkin}</span>
          <div className="progress-bar">
            <div style={{ width: `${checkin * 2}em` }} />
          </div>
        </div>
        <div className="rating-bar">
          <span className="rating-titles">Accuracy</span>
          <span className="rating-value">{accuracy}</span>
          <div className="progress-bar">
            <div style={{ width: `${accuracy * 2}em` }} />
          </div>
        </div>
        <div className="rating-bar">
          <span className="rating-titles">Location</span>
          <span className="rating-value">{location}</span>
          <div className="progress-bar">
            <div style={{ width: `${location * 2}em` }} />
          </div>
        </div>
        <div className="rating-bar">
          <span className="rating-titles">Value</span>
          <span className="rating-value">{value}</span>
          <div className="progress-bar">
            <div style={{ width: `${value * 2}em` }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarRating;

// overall={this.state.overallRating}
// cleanliness={this.state.cleanlinessRating}
// communication={this.state.communicationRating}
// checkin={this.state.checkInRating}
// accuracy={this.state.accuracyRating}
// location={this.state.locationRating}
// value={this.state.valueRating}
