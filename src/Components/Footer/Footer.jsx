import React from "react";
import footerImg from "../../images/footer.png";

function Footer() {
  return (
    <div className="w-full mb-10">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-8 md:my-4 lg:space-x-16 text-gray-500 w-[80%] m-auto">
        <div className="text-justify">
          <img src={footerImg} alt="" />
          <h3 className="mb-14 mt-4">
            Delivering the best coffee life since 1996. From coffee geeks to the
            real ones.
          </h3>
          <h3>CoffeeStyle Inc. © 1996</h3>
        </div>
        <div className="text-justify">
          <h1 className="font-bold text-[#1D1F2E]">MENU</h1>
          <ul
            className="my-4 opacity-[0.6] hover:
            hover:opacity-100"
          >
            <li>Home</li>
            <li className="my-2">Our Product</li>
            <li>About Us</li>
            <li className="my-2">Contact</li>
            <li>Styleguide</li>
          </ul>
        </div>
        <div className=" text-justify">
          <h1 className="font-bold text-[#1D1F2E]">FOLLOW US</h1>
          <ul
            className="my-4 opacity-[0.6] hover:
            hover:opacity-100"
          >
            <li>Facebook</li>
            <li className="my-2">Instagram</li>
            <li>Pinterest</li>
            <li className="my-2">Twitter</li>
          </ul>
        </div>
        <div className="text-justify">
          <h1 className="font-bold text-[#1D1F2E]">CONTACT US</h1>

          <h3 className="text-gray-500 my-4">We're Always Happy to Help</h3>

          <h1 className="text-[#1D1F2E] text-2xl mb-8">us@coffeestyle.io</h1>
          <h3>Powered by Webflow</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
