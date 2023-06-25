import {createBrowserRouter} from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import Dashboard from "../Layouts/Dashboard/Dashboard";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"signup",
          element:<SignUp></SignUp>
        },
        {
          path:"dashboard",
          element: <Dashboard></Dashboard>,
          children:[
            {
              path:"data",
              element:<p>This is home</p>
            }
          ]
        }
      ]
    },
  ]);
  
  export default router;