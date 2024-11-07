/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ rating }) => {
  const ratingstar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <span className="text-yellow-400">
            {" "}
            <FaStar></FaStar>
          </span>
        ) : rating >= number ? (
          <span className="text-yellow-400">
            <FaStarHalf></FaStarHalf>
          </span>
        ) : (
          <span className="text-yellow-400">
            {" "}
            <AiOutlineStar></AiOutlineStar>
          </span>
        )}
      </span>
    );
  });
  return <div className="flex gap-2">{ratingstar}</div>;
};

export default Star;
