/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet";

import { useContext, useState } from "react";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import { Mycontext } from "../layouts/ParentLayout";

const Dashboard = () => {
  const cartdata = useContext(Mycontext);
  const cart = cartdata.item;
  console.log(cartdata);

  const [active, setactive] = useState(true);

  const tabswitch = (boolean) => {
    if (boolean) {
      setactive(boolean);
    } else {
      setactive(boolean);
    }
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard | Gadget-Heaven</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className={` bg-purple-500 py-12 space-y-2  `}>
        <h1 className="md:text-5xl text-white font-soora font-bold text-center">
          Dashboard
        </h1>
        <p className="text-xs md:text-sm font-soora text-white/80 text-center px-1 ">
          Check your selected products and wishlist from here. From smart
          devices to <br />
          the coolest accessories, we have it all!
        </p>

        <div className="flex justify-center gap-5 mt-10 ">
          <p
            onClick={() => tabswitch(true)}
            className={`${
              active ? "bg-white text-purple-500" : "bg-purple-500 text-white"
            }  border rounded-full px-10 py-1  font-soora font-semibold cursor-pointer hover:bg-slate-300`}
          >
            Cart
          </p>
          <p
            onClick={() => tabswitch(false)}
            className={`${
              active ? "bg-purple text-white" : "bg-white text-purple-500 "
            } border rounded-full px-10 py-1 font-soora font-semibold cursor-pointer hover:bg-slate-300`}
          >
            Wishlist
          </p>
        </div>
      </div>

      {active ? <Cart></Cart> : <Wishlist></Wishlist>}
    </div>
  );
};

export default Dashboard;
