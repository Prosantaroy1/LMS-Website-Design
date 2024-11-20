import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Courses from "../pages/Courses/Courses";
import Contact from "../pages/Contact/Contact";

const router=createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/courses',
                element: <Courses/>
            },
            {
                path: '/contact',
                element: <Contact/>
            }
        ]
    }
])

export default router;