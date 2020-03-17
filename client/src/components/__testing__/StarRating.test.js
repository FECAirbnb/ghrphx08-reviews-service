/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from '../../enzyme';

import StarRating from '../StarRating';

describe('StarRating rendering and props', () => {
  const sampleDataRatings = {
    overall: '3.14',
    cleanliness: '2.57',
    communication: '3.14',
    checkin: '2.86',
    accuracy: '3.00',
    location: '2.57',
    value: '3.00'
  };

  const sampleDataNumberOfReviews = 7;
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <StarRating ratings={sampleDataRatings} numberOfReviews={sampleDataNumberOfReviews} />
    );
  });

  it('should render', () => {
    // eslint-disable-next-line no-unused-vars
    const testRender = shallow(
      <StarRating ratings={sampleDataRatings} numberOfReviews={sampleDataNumberOfReviews} />
    );
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
    // console.log(wrapper.find())
    // wrapper.find('.rating-bar').to.have.lengthOf(5);
    expect(wrapper.find('.rating-bar').length).toBe(6);
    expect(wrapper.find('.rating-titles').length).toBe(6);
    expect(wrapper.find('.rating-value').length).toBe(6);
    expect(wrapper.find('.progress-bar').length).toBe(6);
  });

  it('should have the correct values display', () => {
    const ratingTexts = wrapper.find('.rating-value').map(node => {
      return node.text();
    });
    expect(ratingTexts).toEqual(['2.57', '3.00', '3.14', '2.57', '2.86', '3.00']);
  });

  it('should have the correct labels for the values', () => {
    const ratingTitles = wrapper.find('.rating-titles').map(node => {
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
