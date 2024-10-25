import React from 'react';
// import card from '@/images/card-1.jpg';
import Image from 'next/image';

interface IArrival {
  id?: number;
  imgUrl: string;
  title?: string;
  price?: number;
}

const NewCard = (props: IArrival) => {
  return (
    <div className="card" id={String(props.id)} style={{ maxWidth: 400, maxHeight: 400 }}>
      <div className="card-image-wrapper" style={{ maxWidth: 400, maxHeight: 350 }}>
        <Image src={props.imgUrl} alt="card image" className="card-image" fill />
      </div>
      <div className="desc">
        <p>{props.title}</p>
        <p>${props.price}</p>
      </div>
    </div>
  );
};

export default NewCard;
