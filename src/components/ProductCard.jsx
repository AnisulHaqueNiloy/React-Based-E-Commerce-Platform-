/* eslint-disable react/prop-types */
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const ProductCard = () => {
  const { category } = useParams();
  const { pathname } = useLocation();
  console.log(pathname);

  const data = useLoaderData();

  const [products, setproducts] = useState([]);

  useEffect(() => {
    if (category) {
      const filtered = [...data].filter((d) => d.category === category);
      setproducts(filtered);
    } else {
      setproducts(data.slice(0, 9));
    }
  }, [data, category]);

  const [showAllClicked, setShowAllClicked] = useState(false);
  const showAll = () => {
    setproducts([...data]);
    setShowAllClicked(true);
  };

  return (
    <>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <Card key={product.product_id} product={product}></Card>
        ))}
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.length > 0 ? (
          products.map((product) => (
            <Card key={product.product_id} product={product} />
          ))
        ) : (
          // Display loading indicator if data is still fetching

          <p className=" md:ml-[100px] text-center items-center text-4xl font-bold text-purple-500 mt-10">
            No Products in this category...
          </p>
        )}
      </div>

      {pathname === "/" && !showAllClicked ? (
        <button
          onClick={() => showAll()}
          className="btn bg-purple-500 mt-5 rounded-full px-5  "
        >
          Show all
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default ProductCard;
