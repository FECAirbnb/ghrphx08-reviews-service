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
      locationId: 5,
      reviewAverage: {
        overall: null,
        cleanliness: null,
        communication: null,
        checkin: null,
        accuracy: null,
        location: null,
        value: null
      }
    };
    this.renderReviewComponent = this.renderReviewComponent.bind(this);
    this.renderRatingsComponent = this.renderRatingsComponent.bind(this);
    this.average = this.average.bind(this);
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
      .then(() => {
        console.log(this.state);
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

  async average() {
    const numberOfReviews = this.state.reviewToRender.length;
    const locationRatings = {
      overallStars: 0,
      cleanlinessStars: 0,
      communicationStars: 0,
      checkInStars: 0,
      accuracyStars: 0,
      locationStars: 0,
      valueStars: 0
    };
    this.state.reviewToRender.forEach(review => {
      locationRatings.overallStars += review.overall_star_rating;
      locationRatings.cleanlinessStars += review.cleanliness_rating;
      locationRatings.communicationStars += review.communication_rating;
      locationRatings.checkInStars += review.check_in_rating;
      locationRatings.accuracyStars += review.accuracy_rating;
      locationRatings.locationStars += review.location_rating;
      locationRatings.valueStars += review.value_rating;
    });
    for (let key in locationRatings) {
      locationRatings[key] = Math.ceil(locationRatings[key] / numberOfReviews);
    }
    await this.setState(
      state => {
        state.reviewAverage.overall = locationRatings.overallStars;
        state.reviewAverage.cleanliness = locationRatings.cleanlinessStars;
        state.reviewAverage.communication = locationRatings.communicationStars;
        state.reviewAverage.checkin = locationRatings.checkInStars;
        state.reviewAverage.accuracy = locationRatings.accuracyStars;
        state.reviewAverage.location = locationRatings.locationStars;
        state.reviewAverage.value = locationRatings.valueStars;
      },
      () => {
        console.log(this.state.reviewAverage);
      }
    );
  }

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
    let val = Object.values(this.state.reviewAverage);
    if (val.includes(null)) {
      return <div>No stars</div>;
    } else {
      return <StarRating ratings={this.state.reviewAverage} />;
    }
  }

  render() {
    return (
      <div>
        <div>{this.renderRatingsComponent()}</div>
        <div id="reviews">{this.renderReviewComponent()}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
