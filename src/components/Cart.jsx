/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { FiDelete } from "react-icons/fi";
import { Mycontext } from "../layouts/ParentLayout";
import { getProduct, removecart, removeWish } from "../utils";
import success from "../assets/success.png";
import {
  addPrice,
  getPrice,
  removecount,
  removeprice,
} from "../utils/cartbalance";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const amount = useContext(Mycontext);
  const rmv = amount.removeCounter;
  const cartamount = amount.carttotal;
  const [cart, setcart] = useState([]);
  useEffect(() => {
    const product = getProduct();
    setcart(product);
  }, []);

  const [getbalance, setgetbalance] = useState(0);
  useEffect(() => {
    const p = getPrice();
    setgetbalance(p);
  }, []);

  const nav = useNavigate();

  const handledlt = (id, price) => {
    removecart(id);
    const product = getProduct();
    setcart(product);
    console.log(price);
    const n = getbalance - price;
    setgetbalance(n);
    removeprice(price);

    rmv();
  };

  const sort = () => {
    const sorted = [...cart].sort((a, b) => b.price - a.price);
    setcart(sorted);
  };

  const [open, setopen] = useState(false);
  const [total, settotal] = useState(0);
  const purchase = () => {
    const c = getPrice();
    settotal(c);
    localStorage.removeItem("CartItem");
    localStorage.removeItem("Price");
    localStorage.removeItem("count");
    const p = getProduct();
    setcart(p);
    const b = getPrice();
    setgetbalance(b);
    setopen(true);
  };

  const handleModalClose = () => {
    setopen(false);
    nav("/"); // Close the modal and reset state
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard | Cart | Gadget-Heaven</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="md:w-10/12 mx-auto">
        <div className="flex flex-col md:flex-row justify-between my-5 items-center font-soora text-2xl font-bold">
          <div> Cart</div>
          <div className="flex flex-col md:flex-row gap-5 items-center font-soora text-2xl">
            {!getbalance == 0 ? (
              <p>Total Cost: ${getbalance.toFixed(2)}</p>
            ) : (
              ""
            )}
            <button
              onClick={() => sort()}
              className="btn bg-white rounded-full px-5 py-1 text-xl font-soora"
            >
              Sort By Price
            </button>

            <button
              disabled={cart.length === 0}
              onClick={() => {
                purchase(), rmv();
              }}
              className="btn bg-purple-500   px-5 py-1 rounded-full text-xl font-soora"
            >
              Purchase
            </button>
          </div>
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
              </div>
              <div
                onClick={() => handledlt(item.product_id, item.price)}
                className="border border-red-600 rounded-full p-2 absolute top-2 right-2 cursor-pointer"
              >
                <FiDelete />
              </div>
            </div>
          ))}
        </div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_3" className="modal" open={open}>
          <div className="modal-box">
            <form method="dialog">
              <div className="flex flex-col gap-4 items-center justify-center">
                <img className="w-[48px] h-[48px]" src={success} alt="" />
                <p className="font-soora font-bold text-2xl border-b-2">
                  Payment Successfull
                </p>

                <p className="font-soora text-lg text-gray-400">
                  Thanks for purchasing
                </p>
                <p className="font-soora text-lg text-gray-400">
                  Total:${total.toFixed(2)}
                </p>
                <button
                  onClick={() => handleModalClose()}
                  className="btn w-full rounded-2xl"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Cart;
