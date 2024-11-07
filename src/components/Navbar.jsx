import { NavLink, useLocation, useParams } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { Mycontext } from "../layouts/ParentLayout";
import { getcartItemCount, getloveItemCount } from "../utils/cartbalance";

const Navbar = () => {
  const value = useContext(Mycontext);
  const cart = value.cartitem;
  const lve = value.love;
  const { pathname } = useLocation();
  const { category } = useParams();

  const [counter, setcounter] = useState(0);
  useEffect(() => {
    const count = getcartItemCount();
    setcounter(count);
  }, [cart]);

  // const [lovecount, setlovecount] = useState(0);
  // useEffect(() => {
  //   const count = getloveItemCount();
  //   setlovecount(count);
  // }, [lve]);

  console.log(counter);

  const link = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/faq">Faq</NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`navbar  ${
        pathname == "/" || pathname == `/${category}`
          ? "bg-purple-500"
          : "bg-white"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-soora "
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost font-soora font-bold text-xl">
          Gadget Heaven
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className={`menu menu-horizontal px-2 space-x-5 font-soora
         
          `}
        >
          {link}
        </ul>
      </div>
      <div className="navbar-end ">
        <div className="relative mx-2 rounded-full p-1 text-xl bg-white cursor-pointer shadow-md">
          <BsCart4></BsCart4>

          {!counter <= 0 ? (
            <div className="absolute top-0 right-0 rounded-full bg-white  text-black text-xs font-bold ">
              {counter}
            </div>
          ) : (
            ""
          )}
          {/* <div className="absolute top-0 right-0 rounded-full bg-white  text-black text-xs font-bold ">
            {counter}
          </div> */}
        </div>

        <div className="relative mx-2 rounded-full p-1 text-xl bg-white cursor-pointer shadow-md">
          <FaRegHeart></FaRegHeart>

          {/* <div className="absolute top-0 right-0 rounded-full bg-white  text-black text-xs font-bold ">
            {lovecount}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
