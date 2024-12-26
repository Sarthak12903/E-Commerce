import React from "react";
import ProductTile from "../ProductTile/ProductTile";
import CategorialHeading from "../CategorialHeading/CategorialHeading";

const ProductRow = () => {
  return (
    <div className="m-4 p-4 rounded-xl bg-grey-500">
     <CategorialHeading name={"Top Offers"}/>

      <div className="w-full flex flex-nowrap overflow-x-auto space-x-2 pb-4 ">
        <ProductTile
          href="\ProductImg\topoffer1.avif"
          name="Calvin Klein & more"
          discount="Min 30% Discount"
        />

        <ProductTile
          href="\ProductImg\topoffer2.webp"
          name="Calvin Klein & more"
          discount="Min 30% Discount"
        />

        <ProductTile
          href="\ProductImg\topoffer5.webp"
          name="Calvin Klein & more"
          discount="Min 30% Discount"
        />

        <ProductTile
          href="\ProductImg\topoffer4.webp"
          name="Calvin Klein & more"
          discount="Min 30% Discount"
        />

        <ProductTile
          href="\ProductImg\topoffer6.webp"
          name="Calvin Klein & more"
          discount="Min 30% Discount"
        />

        <ProductTile
          href="\ProductImg\topoffer7.webp"
          name="Calvin Klein & more"
          discount="Min 30% Discount"
        />

        <ProductTile
          href="\ProductImg\topoffer3.jpeg"
          name="Calvin Klein & more"
          discount="Min 30% Discount"
        />

        <ProductTile
          href="\ProductImg\topoffer8.webp"
          name="Calvin Klein & more"
          discount="Min 30% Discount"
        />
      </div>
    </div>
  );
};

export default ProductRow;
