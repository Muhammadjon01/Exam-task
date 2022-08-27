import React from "react";
import "./About.css";

function About() {
  return (
    <div className="h-[500px] pt-40 mb-[100px] md:mb-[100px]">
      <div className="flex flex-col w-[60%] mx-auto">
        <div className="text-black flex flex-col justify-between space-y-10">
          <h1 className="text-4xl">
            Even the all-powerful Pointing has no control about the blind texts.
          </h1>
          <p className="text-[#1D1F2E]">
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth. Even the all-powerful Pointing has no control
            about the blind texts it is an almost unorthographic life One day
            however a small line of blind text by the name of Lorem Ipsum
            decided to leave for the far World of Grammar.
          </p>

          <button className="border-b-2 w-[200px] text-[#A25F4B] border-b-[#A25F4B] p-2 m-auto">
            Read the full Story
          </button>
        </div>
        <div className="mt-[100px]">
          <h2 className="mx-auto">
            <span className="text-[#1D1F2E]">Featured Mugs</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
