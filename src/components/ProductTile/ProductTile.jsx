import React from 'react';

const ProductTile = ({ href, name, discount }) => {
  return (
    <div className='p-6 flex-shrink-0 flex flex-col space-y-2 justify-center items-center bg-orange-100 rounded-xl'>
      <img className="w-[11rem] h-[13rem]" src={href} alt={name} />
      <div>
      <h1>{name || "loading"}</h1>
      <h2 className='font-semibold '>{discount || "loading"}</h2>
      </div>
    </div>
  );
};

export default ProductTile;
