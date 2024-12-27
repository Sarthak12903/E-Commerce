import React from "react";
import ProductTile from "../ProductTile/ProductTile";
import CategorialHeading from "../CategorialHeading/CategorialHeading";

const ProductCategories = ({ name }) => {
  return (
    <div className="flex  items-center justify-around">
      <div className="w-auto h-auto p-2 m-4 border-2 border-orange-200 rounded-xl flex flex-col gap-4">
        <CategorialHeading name={"Bestsellers of the week"} />

        <div className="flex  gap-4 ">
          <ProductTile
            href="\CategoriesImg\BestsellerImg\bestseller1.webp"
            name="Calvin Klein & more"
            discount="Min 30% Discount"
          />
          <ProductTile
            href="\CategoriesImg\BestsellerImg\bestseller2.png"
            
            name="Calvin Klein & more"
            discount="Min 30% Discount"
          />
          <ProductTile
            href="\CategoriesImg\BestsellerImg\bestseller3.webp"
            
            name="Calvin Klein & more"
            discount="Min 30% Discount"
          />
        </div>
        <div className="flex gap-4 ">
          <ProductTile
            href="\CategoriesImg\BestsellerImg\bestseller4.webp"
            
            name="Calvin Klein & more"
            discount="Min 30% Discount"
          />
          <ProductTile
            href="\CategoriesImg\BestsellerImg\bestseller5.webp"
            
            name="Calvin Klein & more"
            discount="Min 30% Discount"
          />
          <ProductTile
            href="\CategoriesImg\BestsellerImg\bestseller6.webp"
            
            name="Calvin Klein & more"
            discount="Min 30% Discount"
          />
        </div>
      </div>

      <div className="w-auto h-auto p-2 m-4 border-2 border-orange-200 rounded-xl flex flex-col gap-4">
        <CategorialHeading name={"Trending Accesories"} />

        <div className="flex gap-4 ">
          <ProductTile
            href="CategoriesImg\Accesories\accesories2brutonshoe.webp"
            name="Calvin Klein & more"
            discount="Min 30% Discount"
          />
          <ProductTile
            href="\CategoriesImg\Accesories\accesories5lethrbracelette.webp"
            name="Calvin Klein & more"
            discount="Min 30% Discount"
          />
          <ProductTile
            href="\CategoriesImg\Accesories\accesories6cap.webp"
            name="Calvin Klein & more"
            discount="Min 30% Discount"
          />
        </div>
        <div className="flex gap-4 ">
          <ProductTile
            href="\CategoriesImg\Accesories\accesories4samsungsmartwatch.webp"
            name="Calvin Klein & more"
            discount="Min 30% Discount"
          />
          <ProductTile
            href="\CategoriesImg\Accesories\accesories1herfashion.webp"
            name="Calvin Klein & more"
            discount="Min 30% Discount"
          />
          <ProductTile
            href="\CategoriesImg\Accesories\accesories3firnessyogamat.webp"
            name="Calvin Klein & more"
            discount="Min 30% Discount"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
