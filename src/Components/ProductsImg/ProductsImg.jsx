import React from "react";
import "./Productimg.css";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.png";
import img6 from "../../images/img6.png";
import img7 from "../../images/img7.png";
import img8 from "../../images/img8.png";
import img9 from "../../images/img9.png";

function ProductsImg() {
  return (
    <div className="w-full bg-[#FFFFFF] pb-10 mt-[100px]">
      <div className="w-[80%] bg-[#FFFFFF] m-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col rounded bg-[#FFFFFF] shadow-lg shadow-zinc-500/40">
            <div className="pb-10">
              <div>
                <img src={img1} alt="" className="w-[100%]" />
              </div>
              <h3 className="text-xl font-bold pt-4">Red Love Cup</h3>
              <span className="inline text-[#A25F4B]">$25.00 </span>
              <span
                className=""
                style={{ textDecoration: "line-through", color: "gray" }}
              >
                $ 37.00 USD
              </span>
            </div>
          </div>

          <div className="flex flex-col rounded bg-[#FFFFFf] shadow-lg shadow-zinc-500/40">
            <div>
              <img src={img2} alt="" className="w-[100%]" />
              <h3 className="text-xl font-bold pt-4">Black Tea Cup</h3>
              <span className="inline text-[#A25F4B]">$15.00 </span>
              <span
                className=""
                style={{ textDecoration: "line-through", color: "gray" }}
              >
                $ 29.00 USD
              </span>
            </div>
          </div>

          <div className="flex flex-col rounded bg-[#FFFFFf] shadow-lg shadow-zinc-500/40">
            <div>
              <img src={img3} alt="" className="w-[100%]" />
              <h3 className="text-xl font-bold pt-4">B&W Essentials Mug</h3>
              <span className="inline text-gray-500">$50.00 USD</span>
            </div>
          </div>

          <div className="flex flex-col rounded bg-[#FFFFFf] shadow-lg shadow-zinc-500/40">
            <div className="pb-10">
              <img src={img4} alt="" className="w-[100%]" />
              <h3 className="text-xl font-bold pt-4">Winter Style Mug</h3>
              <span className="inline text-gray-500">$25.00 USD</span>
            </div>
          </div>

          <div className="flex flex-col rounded bg-[#FFFFFf] shadow-lg shadow-zinc-500/40">
            <div>
              <img src={img5} alt="" className="w-[100%]" />
              <h3 className="text-xl font-bold pt-4">Ceramic Tea</h3>
              <span className="inline text-gray-500">$46.00 USD</span>
            </div>
          </div>

          <div className="flex flex-col rounded bg-[#FFFFFF] shadow-lg shadow-zinc-500/40">
            <div className="pb-4">
              <div>
                <img src={img6} alt="" className="w-[100%]" />
              </div>
              <h3 className="text-[17px] font-bold pt-4">No Handle Bar Cup</h3>
              <span className="inline text-gray-500">$34.00 USD</span>
            </div>
          </div>

          <div className="flex flex-col rounded bg-[#FFFFFf] shadow-lg shadow-zinc-500/40">
            <div className="pb-4">
              <img src={img7} alt="" className="w-[100%]" />
              <h3 className="text-xl font-bold pt-4">The Pencil Building</h3>
              <span className="inline text-gray-500">$25.00 USD</span>
            </div>
          </div>

          <div className="flex flex-col rounded bg-[#FFFFFf] shadow-lg shadow-zinc-500/40">
            <div>
              <img src={img8} alt="" className="w-[100%]" />
              <h3 className="text-xl font-bold pt-4">The Pencil Building</h3>
              <span className="inline text-gray-500">$99.00 USD</span>
            </div>
          </div>

          <div className="flex flex-col rounded bg-[#FFFFFf] shadow-lg shadow-zinc-500/40">
            <div>
              <img src={img9} alt="" className="w-[100%]" />
              <h3 className="text-xl font-bold pt-4">The Pencil Building</h3>
              <span className="inline text-gray-500">$29.00 USD</span>
            </div>
          </div>
        </div>
        <div>
          <div className="line mt-[100px] ">
            <h2 className=" mx-auto">
              <span className=" text-[#1D1F2E]">
                Buy 2 mugs and get a coffee magazine free
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsImg;
