/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createBrowserRouter } from "react-router-dom";
import ParentLayout from "../layouts/ParentLayout";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Error from "../components/Error";
import ProductCard from "../components/ProductCard";
import ProductDetails from "../components/ProductDetails";
import Faq from "../pages/Faq";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ParentLayout></ParentLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

        loader: () => fetch("/category.json"),
        children: [
          {
            path: "/",
            element: <ProductCard></ProductCard>,

            loader: () => fetch("/data.json"),
          },
          {
            path: "/:category",
            element: <ProductCard></ProductCard>,
            loader: () => fetch("/data.json"),
          },
        ],
      },

      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/data.json"),
      },

      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },

      {
        path: "/details/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
    ],
  },
]);

export default routes;
