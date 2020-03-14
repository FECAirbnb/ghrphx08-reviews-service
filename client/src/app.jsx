/* eslint-disable no-else-return */
/* eslint-disable no-param-reassign */
/* eslint-disable react/sort-comp */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable no-useless-return */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/Reviews.jsx';
import StarRating from './components/StarRating.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: [],
      reviewToRender: null,
      locationId: 5
    };
    this.renderReviewComponent = this.renderReviewComponent.bind(this);
    this.renderRatingsComponent = this.renderRatingsComponent.bind(this);
  }

  componentDidMount() {
    axios
      .get('/api/reviews')
      .then(result => {
        this.setState({ allReviews: result.data });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get(`/api/reviews/${this.state.locationId}`)
      .then(result => {
        this.setState({ reviewToRender: result.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.reviewToRender !== this.state.reviewToRender) {
  //     this.average();
  //   }
  // }

  renderReviewComponent() {
    if (this.state.reviewToRender === null) {
      return <div>No Reviews</div>;
    }
    let reviewDisplayLimit = 6;
    return this.state.reviewToRender.map((review, mapKey) => {
      reviewDisplayLimit -= 1;
      if (reviewDisplayLimit !== 0) {
        return <Reviews review={review} key={mapKey} />;
      }
      return;
    });
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
        locationRatings[ratingTitle] = (locationRatings[ratingTitle] / numberOfReviews).toFixed(2);
      }

      return <StarRating ratings={locationRatings} numberOfReviews={numberOfReviews} />;
    }
  }

  render() {
    return (
      <div>
        <div className="separation-line" />
        <div>{this.renderRatingsComponent()}</div>
        <div id="reviews">{this.renderReviewComponent()}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
