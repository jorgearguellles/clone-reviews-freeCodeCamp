/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import '../styles/review.css';

export const Review = ( { srcImg, name, country, company, role, review } ) => {
  return (
    <div className='review-container'>
      <img className='review-image' src={srcImg} alt='reviewer photo' />
      <div className='review-text-container'>
        <h2 className='reviewer-name'>{name} in {country}</h2>
        <p className='reviewer-role'>{role} on {company}</p>
        <p className='review-text'>{review}</p>
    </div>
    </div>
  );
};
 