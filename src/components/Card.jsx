/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const Card = ({ product }) => {
  const { product_id, product_image, product_title, price } = product;
  return (
    <>
      <NavLink to={`/details/${product_id}`}>
        <div className="p-5 rounded-2xl bg-white">
          <div className="space-y-3">
            <img
              className="rounded-2xl w-full h-[170px]"
              src={product_image}
              alt=""
            />
            <p className="font-soora font-bold text-2xl">{product_title}</p>
            <p className="font-soora text-xl">Price: {price}$</p>
            <button className="rounded-full  px-2 py-1  outline hover:bg-purple-500 outline-purple-500">
              View Details
            </button>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Card;
