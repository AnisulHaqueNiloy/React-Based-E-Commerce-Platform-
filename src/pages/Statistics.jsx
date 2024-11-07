import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData();

  // Ensure data is valid and has necessary properties
  if (!data || !Array.isArray(data) || !data.length) {
    return <div>No data to display</div>;
  }

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Process data to match Recharts' expected format
    const processedData = data.map((item) => ({
      name: item.product_title,
      price: item.price,
      rating: item.rating,
    }));

    setChartData(processedData);
  }, [data]);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Statistics | Gadget-Heaven</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className={` bg-purple-500 py-12 space-y-2  `}>
        <h1 className="md:text-5xl text-white font-soora font-bold text-center">
          Statistics
        </h1>
        <p className="text-xs md:text-sm font-soora text-white/80 text-center px-1 ">
          Check your selected products and wishlist from here. From smart
          devices to <br />
          the coolest accessories, we have it all!
        </p>
      </div>
      <div className="w-full mt-24">
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            width={700}
            height={400}
            data={chartData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="price"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="price" barSize={20} fill="#ff7300" />
            <Scatter dataKey="rating" fill="red" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
