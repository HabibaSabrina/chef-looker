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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>,
            loader: () => fetch('http://localhost:5000/chef')
        },
        {
            path:"/blog",
            element:<Blog></Blog>
        },
        {
            path:'chef/:id',
            element:<PrivateRoute><ChefRecipe></ChefRecipe></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
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