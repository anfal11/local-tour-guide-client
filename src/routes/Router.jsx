import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../page/Home";
import Dashboard from "../page/Dashboard";
import Login from "../page/Login";
import Register from "../page/Register";
import ErrorPage from "../page/ErrorPage";
import MyServices from "../components/MyServices";
import AddServices from "../components/AddServices";
import MySchedule from "../components/MySchedule";
import PrivateRoute from "./PrivateRoute";
import AllService from "../page/AllService";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "allService",
        element: <AllService />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
   {
    path: '/myServices',
    element: <PrivateRoute><MyServices /></PrivateRoute>,
   },
   {
    path: '/addServices',
    element: <PrivateRoute><AddServices /></PrivateRoute>,
   },
   {
    path: '/MySchedule',
    element: <PrivateRoute><MySchedule /></PrivateRoute>,
   }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default Router;
