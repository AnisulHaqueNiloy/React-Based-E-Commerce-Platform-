import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Container from "../components/Container";
import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gadgets | Gadget-Heaven</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      {/* header */}
      <Header></Header>

      <div className="bg-[#F7F7F7] md:mt-[300px] mt-[120px]">
        <div className="bg-[#F7F7F7]">
          <h1 className="font-soora text-4xl text-center py-10">
            {" "}
            Explore Cutting-Edge Gadgets
          </h1>
        </div>
      </div>

      {/* banner */}

      <div className="w-11/12 mx-auto flex flex-col gap-2 lg:flex-row lg:justify-around">
        <div className="">
          <Container data={data}></Container>
        </div>
        <div className="">
          <Outlet></Outlet>
        </div>
      </div>

      {/* category and items  */}
    </div>
  );
};

export default Home;
