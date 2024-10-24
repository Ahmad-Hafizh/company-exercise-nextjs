import React from 'react';
// import card from '@/images/card-1.jpg';
import Image from 'next/image';

const NewCard = () => {
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <Image src="/card-1.jpg" alt="card image" className="card-image" fill />
      </div>
      <div className="desc">
        <p>911 GT3 RS</p>
        <p>$300,000</p>
      </div>
    </div>
  );
};

export default NewCard;
