/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { TextReview } from './TextReview';
import photo from '../img/1.png'

export const ReviewContainer = () => {
  return (
    <div className='review-container'>
      <img className='review-image' src={photo} alt='reviewer photo' />
      <TextReview />
    </div>
  );
};
 