import React from "react";
import "./Stories.css";
import storiesImg1 from "../../images/stories1.png";
import storiesImg2 from "../../images/stories2.png";
import storiesImg3 from "../../images/stories3.png";
import { Input, Button } from "antd";

function Stories() {
  return (
    <div className="w-full bg-[#FFFFFF] pb-10 mt-[100px]">
      <div className="w-[80%] bg-[#FFFFFF] my-10 mx-auto">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2  gap-10 text-center">
          <div className="flex flex-col rounded bg-[#FFFFFF] text-justify hover:drop-shadow-lg">
            <div className="pb-4">
              <div>
                <img src={storiesImg1} alt="" className="w-[100%]" />
              </div>
              <h3 className="text-[17px] pt-4">
                Health Check: why do I get a headache when I haven’t had my
                coffee?
              </h3>
              <p className="text-gray-500 py-4">
                It is a paradisematic country, in which roasted parts of
                sentences fly into your mouth.
              </p>

              <p className="text-gray-500">October 9, 2018</p>
            </div>
          </div>
          <div className="flex flex-col rounded bg-[#FFFFFF] text-justify hover:drop-shadow-lg">
            <div className="pb-4">
              <div>
                <img src={storiesImg2} alt="" className="w-[100%]" />
              </div>
              <h3 className="text-[17px] pt-4">
                How long does a cup of coffee keep you awake?
              </h3>
              <p className="text-gray-500 py-4">
                It is a paradisematic country, in which roasted parts. Vel qui
                et ad voluptatem.
              </p>
              <p className="text-gray-500">October 9, 2018</p>
            </div>
          </div>
          <div className="flex flex-col rounded bg-[#FFFFFF] text-justify hover:drop-shadow-lg">
            <div className="pb-4">
              <div>
                <img src={storiesImg3} alt="" className="w-[100%]" />
              </div>
              <h3 className="text-[17px] pt-4">
                Recent research suggests that heavy coffee drinkers may reap
                health benefits.
              </h3>
              <p className="text-gray-500 py-4">
                It is a paradisematic country, in which roasted parts of
                sentences fly into your mouth.
              </p>
              <p className="text-gray-500">October 9, 2018</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bgimage w-[95%] py-10 mx-auto ">
        <div>
          <h3 className="text-white my-10">SIGN UP AND GET FREE COFFEE BAGS</h3>
          <h1 className="text-white text-2xl">Coffee Updates</h1>
        </div>
        <div className="space-x-4 my-10">
          <Input
            placeholder="customer@coffeestyle.io"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#E5E5E5",
              texttransform: "uppercase",
            }}
          />
          <button className="bg-white border px-4 py-2">
            S U B S C R I B E
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stories;
