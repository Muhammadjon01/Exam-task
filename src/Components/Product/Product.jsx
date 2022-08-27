import React from "react";
import img1 from "../../images/product1.png";
import img2 from "../../images/product2.png";

function Product() {
  return (
    <div className="w-full flex flex-col justify-between">
      <div className="grid md:grid-cols-2 gap-10 lg:mt-[10px] sm:mt-[100px] md:mt-[100px] max-w-[80%] m-auto">
        <div className="flex flex-col justify-between text-center w-full ">
          <img className="w-full" src={img1} alt="/" />
          <h3 className="my-3">Pink Premium Ceramic</h3>
          <h4>$ 99.00 USD</h4>
        </div>
        <div>
          <img className="w-full" src={img2} alt="/" />
          <h3 className="my-3">Golden Designers Mug</h3>
          <span className="inline">$50.00 </span>
          <span className="" style={{ textDecoration: "line-through" }}>
            $ 69.00 USD
          </span>
        </div>
      </div>
      <div className="mt-[100px]">
        <h2 className="mx-auto">
          <span className="text-[#1D1F2E]">More Products</span>
        </h2>
      </div>
    </div>
  );
}

export default Product;
