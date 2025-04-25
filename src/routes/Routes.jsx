import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import ErrorElement from "../components/ErrorElement";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorElement />,
        element: <HomeLayouts />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])