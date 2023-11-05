import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../page/Home";

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
                path: "/about",
                element: <h1>About</h1>
            },
            {
                path: "/contact",
                element: <h1>Contact</h1>
            }
        ]
    }
]);
export default Router;