/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from '../../enzyme';
import Reviews from '../Reviews';

const sampleReviewData = {
  id: 17,
  review_date: 'June 2019',
  review_body:
    'Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit.Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit.Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit . Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit. Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit.',
  first_name: 'Trinidad',
  profile_picture: 'https://s3.amazonaws.com/uifaces/faces/twitter/xilantra/128.jpg'
};

const sampleShorterReviewData = {
  id: 17,
  review_date: 'June 2019',
  review_body: 'Explicabo reiciendis id eveniet vero dolorem quidem voluptatem velit.',
  first_name: 'Trinidad',
  profile_picture: 'https://s3.amazonaws.com/uifaces/faces/twitter/xilantra/128.jpg'
};

describe('Reviews component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Reviews review={sampleReviewData} />);
  });

  it('should render a reviews component', () => {
    // eslint-disable-next-line no-unused-vars
    const test = shallow(<Reviews review={sampleReviewData} />);
  });

  it('should have state a review state', () => {
    expect(wrapper.state('limitedReviewGreaterThan150Chars')).toBeTruthy();
    expect(wrapper.state('limitedReviewGreaterThan150Chars')).toEqual(
      `${sampleReviewData.review_body.slice(0, 150)} ... `
    );
  });

  it('should have the correct element classes dividing up the review', () => {
    expect(wrapper.find('.single-review').length).toBe(1);
    expect(wrapper.find('.user-info').length).toBe(1);
    expect(wrapper.find('.user-picture').length).toBe(1);
    expect(wrapper.find('.user-name').length).toBe(1);
    expect(wrapper.find('.review-date').length).toBe(1);
    expect(wrapper.find('.review-info').length).toBe(1);
    expect(wrapper.find('.review-body').length).toBe(1);
  });

  it('should change the state when read more event handler is clicked', () => {
    const preventDefault = jest.fn();
    expect(wrapper.state('limitedReviewGreaterThan150Chars')).toEqual(
      `${sampleReviewData.review_body.slice(0, 150)} ... `
    );
    wrapper.find('a').simulate('click', { preventDefault });
    expect(wrapper.state('limitedReviewGreaterThan150Chars')).toEqual(sampleReviewData.review_body);
  });

  it('should just return the whole review if it is less than 150 charactesr', () => {
    wrapper = shallow(<Reviews review={sampleShorterReviewData} />);
    expect(wrapper.exists('.review-body')).toBe(true);
    expect(wrapper.find('.review-body').text()).toEqual(sampleShorterReviewData.review_body);
  });

});
