import { useLocation, useParams } from "react-router-dom";
import banner from "../assets/banner.jpg";
const Header = () => {
  const { pathname } = useLocation();
  const { category } = useParams();
  console.log(category);

  return (
    <>
      <div
        className={`mb-24 bg-purple-500 py-12 relative ${
          pathname == "/" || pathname == `/${category}` ? "md:h-[480px]" : ""
        }`}
      >
        <div className="flex flex-col gap-2 items-center justify-center space-y-2 ">
          <h1 className="md:text-5xl text-white font-soora font-bold text-center">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h1>
          <p className="text-xs md:text-sm font-soora text-white/80 text-center px-1">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br />
            the coolest accessories, we have it all!
          </p>

          {/* if its home url then manage this thing */}

          {pathname == "/" || pathname == `/${category}` ? (
            <div>
              <div>
                <button className="btn rounded-full my-3 px-6 text-purple-500 font-soora font-semibold">
                  Shop Now
                </button>
              </div>
              <div
                className=" backdrop-blur-lg bg-white/30 p-4 rounded-lg absolute
             translate-y-1.5 -translate-x-1/2  left-1/2"
              >
                <img
                  className="rounded-lg md:w-[700px] md:h-[400px]  "
                  src={banner}
                  alt=""
                />
              </div>
            </div>
          ) : (
            ""
          )}

          {/* if its home url then manage this thing */}
        </div>
      </div>
    </>
  );
};

export default Header;
