import React from "react";

const ProductDeals = () => {
  return (
    <div className="h-[52rem] m-4">
      <div className="w-auto">
        <div className="bg-[url('/ProductImg/topdealbanner1.jpg')] bg-no-repeat bg-cover h-[40%] mx-2 py-10 px-20 rounded-xl">
          <div className="m-10">
            <h1 className="text-white text-5xl mb-4 font-bold">
              Whooping 60% Off
            </h1>
            <h2 className="text-white text-4xl mb-4 font-semibold">
              On Women's Wear!
            </h2>
            <button className="h-12 px-6 py-2 mt-5 mx-20 rounded-full bg-orange-400 text-white text-lg font-semibold hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="bg-[url('/ProductImg/topdealbanner2.jpg')] bg-cover h-[30rem] w-[49%] bg-no-repeat m-2 p-8 rounded-xl">
          <div className="flex flex-col items-center mt-8 mx-20">
            <h1 className="text-white text-4xl my-4 font-bold">
              Get 10% Off on gift items
            </h1>
            <button className="h-12 px-6 py-2 mt-5 mx-20 rounded-full bg-blue-700 text-white text-lg font-semibold hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-50">
              Buy Now
            </button>
          </div>
        </div>
        <div className="bg-[url('/ProductImg/topdealbanner4.jpg')] bg-cover h-[30rem] w-[49%] bg-no-repeat m-2 p-8 rounded-xl">
          <div className="mt-50">
            <h1 className="text-white text-4xl mb-4 font-bold">
              Top Selling Smartphones
            </h1>
            <h1 className="text-white text-3xl mb-4 font-semibold">
              Latest Tech, Best Prices!
            </h1>
            <button className="h-12 px-6 py-2 mt-5 mx-20 rounded-full bg-orange-400 text-white text-lg font-semibold hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeals;
