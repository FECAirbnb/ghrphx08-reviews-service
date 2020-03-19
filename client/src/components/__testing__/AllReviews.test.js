/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from '../../enzyme';
import AllReviews from '../AllReviews';

const sampleLongReviewData = {
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

describe('All the reviews component', () => {
  it('should render', () => {
    const testRender = shallow(<AllReviews review={sampleLongReviewData} />);
  });

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AllReviews review={sampleLongReviewData} />);
  });

  it('should have the correct components for a review', () => {
    expect(wrapper.exists('.user-picture')).toBe(true);
    expect(wrapper.exists('.user-name')).toBe(true);
    expect(wrapper.exists('.user-info')).toBe(true);
    expect(wrapper.exists('.review-date')).toBe(true);
    expect(wrapper.exists('.review-info')).toBe(true);
    expect(wrapper.exists('.all-review-body')).toBe(true);
    expect(wrapper.exists('.read-more-btn')).toBe(true);
  });

  it('should change the state when read more event handler is clicked', () => {
    const preventDefault = jest.fn();
    expect(wrapper.state('limitedReviewGreaterThan150Chars')).toEqual(
      `${sampleLongReviewData.review_body.slice(0, 150)} ... `
    );
    wrapper.find('a').simulate('click', { preventDefault });
    expect(wrapper.state('limitedReviewGreaterThan150Chars')).toEqual(
      sampleLongReviewData.review_body
    );
  });

  it('should render the entire review if it is equal to or less than 150 characters', () => {
    wrapper = shallow(<AllReviews review={sampleShorterReviewData} />);
    expect(wrapper.find('.all-review-body').text()).toEqual(sampleShorterReviewData.review_body);
  });
});
