/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react';

class AllReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limitedReviewGreaterThan200Chars: `${this.props.review.review_body.slice(0, 150)}..`,
      limitedReviewLessThan200Chars: this.props.review.review_body
    };
  }

  readMoreHandler(e) {
    e.preventDefault();
    const wholeReview = this.props.review.review_body;
    this.setState({ limitedReviewGreaterThan200Chars: wholeReview });
    e.target.style.display = 'none';
  }

  renderer() {
    if (this.props.review.review_body.length <= 150) {
      return <div>{this.state.limitedReviewLessThan200Chars}</div>;
    }
    return (
      <div>
        {this.state.limitedReviewGreaterThan200Chars}
        <a
          href=""
          className="read-more-btn"
          style={{ display: 'inline-block' }}
          onClick={e => this.readMoreHandler(e)}
        >
          read more
        </a>
      </div>
    );
  }

  render() {
    return (
      <div className="all-reviews-display">
        <div className="user-info">
          <img
            className="user-picture"
            src={this.props.review.profile_picture}
            width="50"
            height="50"
          />
          <div className="user-name">
            {this.props.review.first_name}
            <div className="review-date">{this.props.review.review_date}</div>
          </div>
        </div>
        <div className="review-info">
          <div className="review-body">
            <div>{this.renderer()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllReviews;
