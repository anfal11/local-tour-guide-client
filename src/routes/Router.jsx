import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../page/Home";
import Dashboard from "../page/Dashboard";
import Login from "../page/Login";
import Register from "../page/Register";
import ErrorPage from "../page/ErrorPage";
import AddServices from "../components/AddServices";
import PrivateRoute from "./PrivateRoute";
import AllService from "../page/AllService";
import ManageService from "../components/ManageService";
import SIngleService from "../components/SIngleService";
import UpdateService from "../components/UpdateService";
import MySchedules from "../components/MySchedules";

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
        path: "services/:serviceName",
        element: (
          <PrivateRoute>
            <SIngleService />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/services/${params.serviceName}`),
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
        path: "/manageService",
        element: (
          <PrivateRoute>
            <ManageService />
          </PrivateRoute>
        ),
      },
      {
        path: "/addServices",
        element: (
          <PrivateRoute>
            <AddServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/MySchedule",
        element: (
          <PrivateRoute>
         <MySchedules />
          </PrivateRoute>
        ),
        loader: () =>
          fetch("http://localhost:5000/api/v1/create-bookings")
      },
      {
        path: '/update-services/:serviceName',
        element: (
          <PrivateRoute>
            <UpdateService />
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`http://localhost:5000/api/v1/update-services/${params.serviceName}`),
      },
     
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
