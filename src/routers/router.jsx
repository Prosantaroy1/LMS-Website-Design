import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Courses from "../pages/Courses/Courses";
import Contact from "../pages/Contact/Contact";
import BlogPage from "../pages/Blog/BlogPage";
import Errorpage from "../pages/errorpage/Errorpage";
import CourseDetilas from "../pages/CourseDetails/CourseDetilas";


const router=createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <Errorpage/>,
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
                path: '/details/:id',
                element: <CourseDetilas/>,
                loader: ()=>fetch('/public/Courses.json')
            },
            {
                path: '/blog',
                element:<BlogPage/>
            },
            {
                path: '/contact',
                element: <Contact/>
            }
        ]
    }
])

export default router;