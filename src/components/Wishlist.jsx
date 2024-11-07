/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { FiDelete } from "react-icons/fi";
import { Mycontext } from "../layouts/ParentLayout";
import { addToCart, getProduct, getWishlist, removeWish } from "../utils";
import { addcartItemCount, addPrice, getPrice } from "../utils/cartbalance";
import { Helmet } from "react-helmet";
const Wishlist = () => {
  const amount = useContext(Mycontext);

  const [cart, setcart] = useState([]);
  useEffect(() => {
    const product = getWishlist();
    setcart(product);
  }, []);

  const handledlt = (id) => {
    removeWish(id);
    const product = getWishlist();
    setcart(product);
  };

  const addtoCart = (product, id, price) => {
    addToCart(product);
    removeWish(id);
    const item = getWishlist();
    setcart(item);
    addcartItemCount();
    addPrice(price);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wishlist | Gadget-Heaven</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="md:w-10/12 mx-auto ">
        <div className="flex flex-col md:flex-row justify-between my-5 items-center font-soora text-2xl font-bold">
          <div> Wishlist</div>
        </div>

        <div className="">
          {cart.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white flex flex-col md:flex-row items-center gap-4 m-5 relative"
            >
              <img className="rounded-2xl" src={item.product_image} alt="" />
              <div className="space-y-5">
                <p className="text-2xl font-soora font-bold">
                  {item.product_title}
                </p>
                <p className="font-soora text-sm text-gray-400">
                  {item.description}
                </p>
                <p className="font-soora font-semi-bold text-xl">
                  Price: ${item.price}
                </p>
                <button
                  onClick={() => addtoCart(item, item.product_id, item.price)}
                  className="btn bg-purple-500   px-5 py-1 rounded-full text-lg font-soora"
                >
                  Add to cart
                </button>
              </div>
              <div
                onClick={() => handledlt(item.product_id)}
                className="border border-red-600 rounded-full p-2 absolute top-2 right-2 cursor-pointer"
              >
                <FiDelete />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
