import React from "react";
import banner from "../assets/banner.jpg";
const UseHeader = ({ title, subtitle }) => {
  return (
    <div
      className={` bg-purple-500 py-12 relative h-[250px] md:h-[280px] mb-[400px]`}
    >
      <h1 className="md:text-5xl text-white font-soora font-bold text-center">
        {title}
      </h1>
      <p className="text-xs md:text-sm font-soora text-white/80 text-center px-1 ">
        {subtitle}
      </p>

      <div
        className=" backdrop-blur-lg bg-white/30 mt-10 p-4 rounded-lg absolute
             translate-y-1.5 -translate-x-1/2  left-1/2"
      >
        <div className="flex flex-col md:flex-row gap-10">
          <img
            className="md:w-[424px] md:h-[503px] rounded-2xl"
            src={banner}
            alt=""
          />
          {/* <div className="space-y-3">
            <p className="font-soora text-2xl font-bold">{product_title}</p>
            <p className="font-soora text-xl text-gray-500">{price}</p>
            <div className="badge badge-accent badge-outline px-2 py-1">
              In Stock
            </div>

            <ul >
                {

                }
            </ul>
        
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default UseHeader;
