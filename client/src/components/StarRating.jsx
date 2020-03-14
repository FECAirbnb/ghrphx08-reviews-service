/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React from 'react';

const StarRating = ({
  ratings: { overall, cleanliness, communication, checkin, accuracy, location, value }
}) => {
  return (
    <div id="star-rating-bars">
      <div className="rating-bar">
        Overall
        <div className="progress-bar">
          <div style={{ width: `${overall * 2}em` }} />
        </div>
        <span>{overall}</span>
      </div>
      <div className="rating-bar">
        Cleanliness
        <div className="progress-bar">
          <div style={{ width: `${cleanliness * 2}em` }} />
        </div>
        <span>{cleanliness}</span>
      </div>
      <div className="rating-bar">
        Communication
        <div className="progress-bar">
          <div style={{ width: `${communication * 2}em` }} />
        </div>
        <span>{communication}</span>
      </div>
      <div className="rating-bar">
        Check-in
        <div className="progress-bar">
          <div style={{ width: `${checkin * 2}em` }} />
        </div>
        <span>{checkin}</span>
      </div>
      <div className="rating-bar">
        Accuracy
        <div className="progress-bar">
          <div style={{ width: `${accuracy * 2}em` }} />
        </div>
        <span>{accuracy}</span>
      </div>
      <div className="rating-bar">
        Location
        <div className="progress-bar">
          <div style={{ width: `${location * 2}em` }} />
        </div>
        <span>{location}</span>
      </div>
      <div className="rating-bar">
        Value
        <div className="progress-bar">
          <div style={{ width: `${value * 2}em` }} />
        </div>
        <span>{value}</span>
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
