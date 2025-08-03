import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import Shop from "./Components/Shop";
import Men from "./Components/MensClothing";
import Women from "./Components/Women";
import Jewelery from "./Components/Jewelary"
import Electronics from "./Components/Electronics"
import { Outlet } from "react-router-dom";

const Theme2=()=>{
    return (
        <div className="theme2">
            <Header />
            <Outlet/>
            <Footer/>
        </div>
    );
}

const appRouter =createBrowserRouter([
    {
        path:"/",
        element: <Theme2 />,
        children:[{
            path:"/",
            element: <Body/>
        },
        {
            path:"/shop",
            element:<Shop/>
        },
        {
            path: "/category/men",
            element: <Men />,
          },
          {
            path: "/category/women",
            element: <Women />,
          },
          {
            path: "/category/jewelery",
            element: <Jewelery />,
          },
          {
            path: "/category/electronics",
            element: <Electronics />,
          }
        ],
    }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);