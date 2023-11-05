import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../page/Home";
import Services from "../page/Services";
import Dashboard from "../page/Dashboard";
import Login from "../page/Login";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "services",
                element: <Services />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            }
        ]
    },
    {
      path: '/login',
      element: <Login />,      
    }
]);
export default Router;