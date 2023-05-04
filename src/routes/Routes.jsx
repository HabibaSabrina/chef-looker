import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Home/Blog/Blog";
import ChefRecipe from "../pages/ChefRecipe/ChefRecipe";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element:<Home></Home>,
            loader: () => fetch('https://chef-looker-server-habibasabrina.vercel.app/chef')
        },
        {
            path:"/blog",
            element:<Blog></Blog>
        },
        {
            path:'chef/:id',
            element:<PrivateRoute><ChefRecipe></ChefRecipe></PrivateRoute>,
            loader: ({params}) => fetch(`https://chef-looker-server-habibasabrina.vercel.app/chef/${params.id}`)
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
      ]
    },
  ]);

export default router;