import React from 'react';

const Card = ({ item }) => {
  return (
    <div
      className='h-80 w-80 bg-neutral-300 m-3 text-lg p-3 
    flex justify-center items-center flex-wrap'
    >
      <img src={item.img} alt='' srcset='' />
      <span>{item.maker} </span>
      <span>{item.year} </span>
      <span>{item.model} </span>
      <span>{item.avg} </span>
      <span>{item.seat} </span>
      <span>{item.price} </span>
    </div>
  );
};

export default Card;
