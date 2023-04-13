import Navbar from "./Home-module/Navbar";
import Forgot from "./user-module/Forgot";
import Login from "./user-module/Login";
import { Route,Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Profile from "./user-module/Profile";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

function App() {

  const router=createBrowserRouter([
    { element:<Login></Login>, path:"/login" },
    { element:<Forgot /> , path:"/forgotPassword" },
    {element:<Profile/>,path:"/profile"}
  ])


  return (
   
    <div>
     <RouterProvider router={router} />
      {/* <Profile></Profile> */}

    {/* <Login></Login> */}
     
     {/* <Forgot></Forgot> */}

      
    </div>
  );
}

export default App;
