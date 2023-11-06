import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../page/Home";
import Services from "../page/Services";
// import Dashboard from "../page/Dashboard";
import Login from "../page/Login";
import Register from "../page/Register";
import ErrorPage from "../page/ErrorPage";
import MyServices from "../components/MyServices";
import AddServices from "../components/AddServices";
import MySchedule from "../components/MySchedule";
// import PrivateRoute from "./PrivateRoute";

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
        path: "services",
        element: <Services />,
      },
    //   {
    //     path: "/dashboard",
    //     element: (
    //       <PrivateRoute>
    //         <Dashboard />
    //       </PrivateRoute>
    //     ),
    //   },
   {
    path: '/myServices',
    element: <MyServices />,
   },
   {
    path: '/addServices',
    element: <AddServices />,
   },
   {
    path: '/MySchedule',
    element: <MySchedule />,
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
