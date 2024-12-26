import React from "react";
import ProductTile from "../ProductTile/ProductTile";
import CategorialHeading from "../CategorialHeading/CategorialHeading";

const ProductCategories = ({ name }) => {
  return (
    <div className="flex  items-center justify-around">
      <div className="w-auto h-auto p-2 m-4 border-2 border-orange-200 rounded-xl flex flex-col gap-4">
        <CategorialHeading name={"Bestsellers of the week"} />

        <div className="flex  gap-4 ">
          <ProductTile />
          <ProductTile />
          <ProductTile /> 
        </div>
        <div className="flex gap-4 ">
          <ProductTile />
          <ProductTile />  
          <ProductTile />
        </div>
      </div>

      <div className="w-auto h-auto p-2 m-4 border-2 border-orange-200 rounded-xl flex flex-col gap-4">
        <CategorialHeading name={"Trending Accesories"} />

        <div className="flex gap-4 ">
          <ProductTile />
          <ProductTile />
          <ProductTile />
        </div>
        <div className="flex gap-4 ">
          <ProductTile />
          <ProductTile />
          <ProductTile />
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
