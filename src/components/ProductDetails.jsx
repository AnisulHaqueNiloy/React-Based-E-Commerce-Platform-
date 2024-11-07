/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";

import { useLoaderData, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import Star from "./Star";
import { Mycontext } from "../layouts/ParentLayout";
import { Helmet } from "react-helmet";
import { addToCart, addWishlist } from "../utils";
import { addcartItemCount, addPrice } from "../utils/cartbalance";

const ProductDetails = () => {
  const value = useContext(Mycontext);
  // console.log(value);
  const f = value.addtocart;

  const add = value.addtolove;
  const item = value.cartItem;

  const { id } = useParams();
  const data = useLoaderData();

  const [details, setDetails] = useState("");

  useEffect(() => {
    const filter = [...data].find((d) => d.product_id === id);
    setDetails(filter);
  }, [data, id]);

  const {
    product_id,
    product_title,
    price,
    description,
    Specification,
    rating,
    product_image,
  } = details;

  const addtoCart = (product) => {
    addToCart(product);
  };

  const addtolist = (product) => {
    addWishlist(product);
  };

  const addprice = (price) => {
    addPrice(price);
  };

  // const cartCounter = (id) => {
  //   const counter=++
  //   addcartItemCount(id)
  // };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Details | Gadget-Heaven</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div
        className={` bg-purple-500 py-12 relative h-[250px] md:h-[280px] mb-[400px]`}
      >
        <h1 className="md:text-5xl text-white font-soora font-bold text-center">
          Product Details
        </h1>
        <p className="text-xs md:text-sm font-soora text-white/80 text-center px-1 ">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br />
          the coolest accessories, we have it all!
        </p>

        <div
          className="  bg-white mt-10 p-4  rounded-lg absolute
             translate-y-1.5 md:-translate-x-1/2 -translate-x-[20%] md:left-1/2 left-[30%]"
        >
          <div className=" bg-white  flex flex-col md:flex-row gap-10">
            <img className=" rounded-2xl" src={product_image} alt="" />
            <div className="space-y-3">
              <p className="font-soora text-2xl font-bold">{product_title}</p>
              <p className="font-soora text-xl text-gray-500">
                Price: ${price}
              </p>
              <div className="badge badge-accent badge-outline px-2 py-1">
                In Stock
              </div>
              <p className="font-soora text-sm text-gray-500">{description}</p>
              {Specification && (
                <ol
                  className="list-decimal font-bold space-y-2"
                  title="Specification"
                >
                  {Specification.map((spec, id) => (
                    <li
                      className="ml-4 font-soora text-sm font-light mt-1  text-gray-500"
                      key={id}
                    >
                      {spec}
                    </li>
                  ))}
                </ol>
              )}
              <p className="font-soora font-bold text-lg ">Rating</p>
              <div className="flex gap-4 items-center">
                <Star rating={rating}></Star>
                <p className="font-soora text-sm font-semibold">{rating}</p>
              </div>
              <div className="flex gap-3 items-center">
                <button
                  onClick={() => {
                    f(price),
                      item(details),
                      addtoCart(details),
                      addprice(price);
                    addcartItemCount();
                  }}
                  className="btn bg-purple-500 rounded-full font-soora "
                >
                  Add to Cart
                </button>
                <button
                  className="hover:bg-slate-200 bg-red-500 w-[40px] h-[40px] rounded-full text-center"
                  onClick={() => {
                    addtolist(details), add();
                  }}
                >
                  <p className="flex justify-center">
                    <FaRegHeart></FaRegHeart>
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
