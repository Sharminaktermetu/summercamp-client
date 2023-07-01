import {createBrowserRouter} from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import PopularClass from "../Pages/Home/PopularClass/PopularClass";
import AllClasses from "../Pages/AllClasses/AllClasses";
import PrivateRoute from "./PrivateRoute";
import MySelectedClass from "../Dashboard/MySelectedClass/MySelectedClass";



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
          path:"allclasses",
          element:<AllClasses></AllClasses>
        },
        {
          path:"dashboard",
          element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
          children:[
            {
              path:"myclass",
              element:<MySelectedClass></MySelectedClass>
            }
          ]
        }
      ]
    },
  ]);
  
  export default router;