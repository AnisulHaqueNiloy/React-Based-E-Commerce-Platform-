import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { createContext, useState } from "react";
import { removecount } from "../utils/cartbalance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Mycontext = createContext();

const ParentLayout = () => {
  const [cartitem, setcarItem] = useState(0);

  const addtocart = (price) => {
    setcarItem(cartitem + 1);
    setcartotal(carttotal + price);
  };
  const removeCounter = () => {
    removecount();
    if (cartitem <= 0) {
      setcarItem(cartitem);
    }
    const n = cartitem - 1;
    setcarItem(n);
  };

  const [love, setlove] = useState(0);
  const addtolove = () => {
    setlove(love + 1);
  };
  const removelove = () => {
    removecount();
    const n = love - 1;
    setlove(n);
  };
  // console.log(cartitem);
  const [item, setitem] = useState([]);
  const cartItem = (id) => {
    setitem([...item, id]);
  };

  const [carttotal, setcartotal] = useState(0);

  return (
    <>
      <Mycontext.Provider
        value={{
          addtolove,
          removelove,
          addtocart,
          cartitem,
          cartItem,
          item,
          carttotal,
          removeCounter,
          love,
        }}
      >
        <div className="bg-[#F7F7F7]">
          <div className="w-11/12 mx-auto">
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-398px)] pb-24 ">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
        <div className="bg-white ">
          <Footer></Footer>
        </div>
        <ToastContainer />
      </Mycontext.Provider>
    </>
  );
};

export default ParentLayout;
