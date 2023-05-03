import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Home/Blog/Blog";
import ChefRecipe from "../pages/ChefRecipe/ChefRecipe";

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
            element:<ChefRecipe></ChefRecipe>,
            loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
        }
      ]
    },
  ]);

export default router;