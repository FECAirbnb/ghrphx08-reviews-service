/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import AllReviews from './AllReviews.jsx';
import AllReviewsStars from './AllReviewsStars.jsx';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewToRender: this.props.reviewToRender
    };
  }

  renderRatingsComponent() {
    if (this.state.reviewToRender !== null) {
      const numberOfReviews = this.state.reviewToRender.length;
      const locationRatings = {
        overall: 0,
        cleanliness: 0,
        communication: 0,
        checkin: 0,
        accuracy: 0,
        location: 0,
        value: 0
      };

      this.state.reviewToRender.forEach(review => {
        locationRatings.overall += review.overall_star_rating;
        locationRatings.cleanliness += review.cleanliness_rating;
        locationRatings.communication += review.communication_rating;
        locationRatings.checkin += review.check_in_rating;
        locationRatings.accuracy += review.accuracy_rating;
        locationRatings.location += review.location_rating;
        locationRatings.value += review.value_rating;
      });

      for (const ratingTitle in locationRatings) {
        if (ratingTitle === 'overall') {
          locationRatings[ratingTitle] = (locationRatings[ratingTitle] / numberOfReviews).toFixed(
            2
          );
        } else {
          locationRatings[ratingTitle] = (locationRatings[ratingTitle] / numberOfReviews).toFixed(
            1
          );
        }
      }

      return <AllReviewsStars ratings={locationRatings} numberOfReviews={numberOfReviews} />;
    }
  }

  render() {
    return (
      <div className="popup">
        <div className="inner-popup">
          <button
            id="close-all-reviews"
            type="button"
            onClick={e => this.props.allReviewsToggle(e)}
          >
            x
          </button>
          <div className="reviews-ratings-container">
            <div className="star-ratings">
              <div className="star-ratings-column">{this.renderRatingsComponent()}</div>
            </div>
            <div className="reviews">
              {this.state.reviewToRender.map((review, mappingKey) => {
                return <AllReviews review={review} key={mappingKey} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
