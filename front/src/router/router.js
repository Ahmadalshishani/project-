import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Dashboard from "../components/dashboard";
import Compares from "../components/compares";
import Login from "../components/Login";
import Register from "../components/Register";
import Congrats from "../components/Congrats";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/compare",
        element: <Compares />,
      },
      {
        path: "/congrats",
        element: <Congrats />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
