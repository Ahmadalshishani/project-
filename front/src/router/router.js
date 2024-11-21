import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Dashboard from "../components/dashboard";
import Compares from "../components/compares";
import Login from "../components/Login";
import Register from "../components/Register"





export const router = createBrowserRouter([

{
path:'/',
element:<Main/>,
children:[
    {
        path:"/dashboard",
        element:<Dashboard/>,
    },
    {
        path:"/compare",
        element:<Compares/>
    },
    {
        path:"/",
        element:<Login/>
    },
    
    {
        path:"register",
        element:<Register/>
    }
    
]},












])






