import React from "react";
import { Button } from 'antd';
import "./Hero.css";

function Hero() {
  return (
    <div className="main h-[500px] pt-40">
      <div className="flex flex-col w-[80%] mx-auto">
        <div className="image text-white flex flex-col justify-between space-y-10">
          <h3>Best place to buy design</h3>
          <h1 className="text-white text-4xl font-bold">Coffee Mugs</h1>
          <p>
            The most versatile furniture system ever created. Designed to fit
            your life, made to move and grow.
          </p>

          <Button type="primary" className="w-[200px] bg-[#fff] text-[#000] m-auto">Explore Our Products</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
