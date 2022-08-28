import React from "react";
import shop1 from "../../images/shop1.png";
import shop2 from "../../images/shop2.png";
import shop3 from "../../images/shop3.png";
import shop4 from "../../images/shop4.png";

function Shop() {
  return (
    <div className="w-full flex flex-col justify-between">
      <div className="grid md:grid-cols-2 gap-16 max-w-[80%] m-auto">
        <div className="flex flex-row justify-center md:items-start w-full px-2 py-8">
          <div>
            <img
              className="w-full p-2 md:mb-[100px] hover:drop-shadow-lg"
              src={shop1}
              alt="/"
            />
          </div>
          <div>
            <img
              className="w-full p-2 hover:drop-shadow-lg"
              src={shop2}
              alt=""
            />
            <img
              className="w-full p-2 hover:drop-shadow-lg"
              src={shop3}
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-between md:items-start w-full px-8 py-8">
            <p className="text-[#000] text-2xl">Premium Offer</p>
            <h1 className="pr-32 text-2xl md:text-3xl  text-justify text-black my-4">
              Get our Coffee Magazine
            </h1>
            <p className="text-justify  text-gray-500 ">
              The most versatile furniture system ever created. Designed to fit
              your life.
            </p>
            <button className="bg-[#000] px-6 py-1 text-[#fff] my-10 md:px-6 md:py-1 sm:px-6 sm:py-1">
              Start Shopping
            </button>
          </div>
        </div>
      </div>

      <div>
        <img src={shop4} alt="" className="mb-[100px]" />
      </div>

      <div className="line mt-[100px] ">
        <h2 className=" mx-auto">
          <span className=" text-[#1D1F2E]">
            Behind the mugs, lifestyle stories
          </span>
        </h2>
      </div>
    </div>
  );
}

export default Shop;
