import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Home from "../page/Home";
import MainNavbar from "../components/navbar/MainNavbar";

import Product from "../components/product/Product";
import Login from "../components/login/Login";
import SignUp from "../components/register/SignUp";
import AboutUs from "../components/aboutus/AboutUs";
import ContactUs from "../components/contactus/ContactUs";
import CardDetail from "../page/CardDetail";
import Cart from "../components/cart/Cart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Home/></div>,
  },
  {
    path: "mainnavbar",
    element: <div><MainNavbar/></div>,
  },

  {
    path: "product",
    element: <div><Product/></div>,
  },
  {
    path: "/product/:id",
    element: <div><CardDetail /></div>,
  },
   {
    path: "login",
    element: <div><Login/></div>,
  },
  {
    path: "signup",
    element: <div><SignUp/></div>,
  },
  {
    path: "aboutus",
    element: <div><AboutUs/></div>,
  },
   {
    path: "contactus",
    element: <div><ContactUs/></div>,
  },
  {
    path: "cart",
    element: <div><Cart/></div>,
  },



  

]);

function Router(){
    return(
         <RouterProvider router={router} />
    )
}

export default Router ;