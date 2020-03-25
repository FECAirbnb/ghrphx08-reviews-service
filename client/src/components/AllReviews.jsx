/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './component.css';

class AllReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limitedReviewGreaterThan150Chars: `${this.props.review.review_body.slice(0, 150)} ... `,
      limitedReviewLessThan150Chars: this.props.review.review_body
    };
  }

  readMoreHandler(e) {
    e.preventDefault();
    const wholeReview = this.props.review.review_body;
    this.setState({ limitedReviewGreaterThan150Chars: wholeReview });

    if (e.target) {
      e.target.style.display = 'none';
    }
  }

  renderer() {
    if (this.props.review.review_body.length <= 150) {
      return <div>{this.state.limitedReviewLessThan150Chars}</div>;
    }
    return (
      <div>
        {this.state.limitedReviewGreaterThan150Chars}
        <a
          href=""
          className={styles['read-more-btn']}
          // style={{ display: 'inline-block' }}
          onClick={e => this.readMoreHandler(e)}
        >
          read more
        </a>
      </div>
    );
  }

  render() {
    return (
      <div className={styles['all-reviews-display']}>
        <div className={styles['user-info']}>
          <img className={styles['user-picture']} src={this.props.review.profile_picture} />
          <div className={styles['user-name']}>
            {this.props.review.first_name}
            <div className={styles['review-date']}>{this.props.review.review_date}</div>
          </div>
        </div>
        <div className={styles['review-info']}>
          <div className={styles['all-review-body']}>
            <div>{this.renderer()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllReviews;
