/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from '../../enzyme';

import AllReviewsStars from '../AllReviewsStars';

const sampleDataRatings = {
  overall: '3.14',
  cleanliness: '2.57',
  communication: '3.14',
  checkin: '2.86',
  accuracy: '3.00',
  location: '2.57',
  value: '3.00'
};

describe('All reviews star rating is rendered properly', () => {
  it('should render', () => {
    const testRender = shallow(<AllReviewsStars ratings={sampleDataRatings} />);
  });

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AllReviewsStars ratings={sampleDataRatings} />);
  });

  it('should render a star image for the rating', () => {
    wrapper.find('img').exists();
    wrapper
      .find('img')
      .matchesElement(
        <img
          id="star-image"
          src="https://i.dlpng.com/static/png/375530_preview.png"
          width="20px"
          height="20px"
          alt="not loaded"
        />
      );
  });

  it('should have cleanliness, communication, checkin, accuracy, location, and value rating sections', () => {
    expect(wrapper.find('#all-rating-average').length).toBe(1);
    expect(wrapper.find('#show-all-stars').length).toBe(1);
    expect(wrapper.find('.all-reviews-rating').length).toBe(6);
    expect(wrapper.find('.all-reviews-star-value').length).toBe(6);
    expect(wrapper.find('.progress-bar-all-reviews').length).toBe(6);
  });

  it('should have the correct values display', () => {
    const ratingTexts = wrapper.find('.all-reviews-star-value').map(node => {
      return node.text();
    });
    expect(ratingTexts).toEqual(['2.57', '3.00', '3.14', '2.57', '2.86', '3.00']);
  });

  it('should have the correct labels for the values', () => {
    const ratingTitles = wrapper.find('.all-reviews-star-title').map(node => {
      return node.text();
    });
    expect(ratingTitles).toEqual([
      'Cleanliness',
      'Accuracy',
      'Communication',
      'Location',
      'Check-in',
      'Value'
    ]);
  });
});
