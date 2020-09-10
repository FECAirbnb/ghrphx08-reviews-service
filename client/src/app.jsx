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
import Loadable from 'react-loadable';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styles from './components/component.css';

const ReviewsComponent = Loadable({
  loader: () => import('./components/Reviews.jsx'),
  loading() {
    return <div></div>;
  }
});
const StarRating = Loadable({
  loader: () => import('./components/StarRating.jsx'),
  loading() {
    return <div></div>;
  }
});
const Popup = Loadable({
  loader: () => import('./components/Popup.jsx'),
  loading() {
    return <div></div>;
  }
});

const App = () => {
  const [reviewToRender, setReviewToRender] = useState(null);
  const [locationId, setLocationId] = useState(5);
  const [showAllReviews, setShowAllReviews] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/reviews/${locationId}`)
      .then(result => {
        setReviewToRender(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const renderReviewComponent = () => {
    if (reviewToRender === null) {
      return <div>No Reviews</div>;
    }
    let reviewDisplayLimit = 6;
    return reviewToRender.map((review, mapKey) => {
      reviewDisplayLimit -= 1;
      if (reviewDisplayLimit >= 0) {
        return <ReviewsComponent review={review} key={mapKey} />;
      } else {
        return;
      }
    });
  };

  const renderRatingsComponent = () => {
    if (reviewToRender !== null) {
      const numberOfReviews = reviewToRender.length;
      const locationRatings = {
        overall: 0,
        cleanliness: 0,
        communication: 0,
        checkin: 0,
        accuracy: 0,
        location: 0,
        value: 0
      };

      reviewToRender.forEach(review => {
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
    } else {
      return <div>No star ratings</div>;
    }
  };

  const renderAllReviewsButton = () => {
    if (reviewToRender !== null) {
      return (
        <button
          className={styles['show-all-reviews']}
          type="button"
          onClick={e => allReviewsToggle(e)}
        >
          Show all {reviewToRender.length} reviews
        </button>
      );
    }
  };

  const allReviewsToggle = e => {
    e.preventDefault();
    setShowAllReviews(!showAllReviews);
  };

  return (
    <div id={styles.app}>
      <div className={styles['separation-line']} />
      <div id={styles['ratings-component']}>{renderRatingsComponent()}</div>
      <div id={styles.reviews}>{renderReviewComponent()}</div>
      <div className={styles['all-reviews-button']}>{renderAllReviewsButton()}</div>
      {showAllReviews ? (
        <Popup reviewToRender={reviewToRender} allReviewsToggle={allReviewsToggle} />
      ) : null}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('reviews-here'));

// export default App;
