import React from 'react';
type propsType = {
  id: string;
};

const CollectionCard = (props: propsType) => {
  // const CollectionCard = ({id}: propsType) => {
  return (
    <div className="card" id={props.id}>
      {/* <div className="card" id={id}> */}
      <p>{props.id}</p>
      {/* <p>{id}</p> */}
    </div>
  );
};
export default CollectionCard;
