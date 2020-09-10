/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Loadable from 'react-loadable';
import styles from './component.css';

const AllReviews = Loadable({
  loader: () => import('./AllReviews.jsx'),
  loading() {
    return <div></div>;
  }
});

const AllReviewsStars = Loadable({
  loader: () => import('./AllReviewsStars.jsx'),
  loading() {
    return <div></div>;
  }
});

const Popup = ({ reviewToRender, allReviewsToggle }) => {
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
  };

  return (
    <div className={styles.popup}>
      <div className={styles['inner-popup']}>
        <button id={styles['close-all-reviews']} type="button" onClick={allReviewsToggle}>
          x
        </button>
        <div className={styles['reviews-ratings-container']}>
          <div className={styles['star-ratings']}>
            <div className={styles['star-ratings-column']}>{renderRatingsComponent()}</div>
          </div>
          <div className={styles.reviews}>
            {reviewToRender.map((review, mappingKey) => {
              return <AllReviews review={review} key={mappingKey} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
