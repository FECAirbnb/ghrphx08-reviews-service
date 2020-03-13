import React from 'react';

const Reviews = ({ review }) => {
  return (
    <div>
      <div className="user-info">
        <div className="review-date">{review.review_date}</div>
        <div className="user-picture">{review.profile_picture}</div>
      </div>
      <div className="review-body">
        <div>{review.review_body}</div>
      </div>
    </div>
  );
};

export default Reviews;
