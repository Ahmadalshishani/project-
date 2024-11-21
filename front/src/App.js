import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import Main from "./layout/Main";


//===============================================================

const App = () => {
  return (
 
    <RouterProvider router={router}><Main></Main></RouterProvider>
   
  );
};

export default App;
