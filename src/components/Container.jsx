/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const Container = ({ data }) => {
  return (
    <>
      <div className="bg-white rounded-2xl border p-6   ">
        <ul className="flex flex-row flex-wrap gap-2 md:flex-col">
          {data.map((d) => (
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "bg-purple-500" : ""} rounded-2xl`
              }
              key={d.category}
              to={`/${d.category}`}
            >
              <li className="bg-[#09080F0D] pl-5 font-soora text-lg p-2 rounded-2xl  hover:bg-purple-500 cursor-pointer">
                {d.category}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Container;
