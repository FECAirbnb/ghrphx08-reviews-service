/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React from 'react';

const StarRating = ({
  ratings: { overall, cleanliness, communication, checkin, accuracy, location, value }
}) => {
  console.log(ratings, 'stringsig');
  return (
    <div id="star-rating-bars">
      <div className="overall-rating">Overall: {overall}</div>
      <div className="overall-rating">Cleanliness: {cleanliness}</div>
      <div className="overall-rating">Communication: {communication}</div>
      <div className="overall-rating">Check-in: {checkin}</div>
      <div className="overall-rating">Accuracy: {accuracy}</div>
      <div className="overall-rating">Location: {location}</div>
      <div className="overall-rating">Rating: {value}</div>
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
