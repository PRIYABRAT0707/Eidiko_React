
import Forgot from "./user-module/Forgot";
import Login from "./user-module/Login";
import { Route,Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Profile from "./user-module/Profile";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import ProminentAppBar from "./Home-module/Navbar";
import ResponsiveAppBar from "./Home-module/Navbar";
import Homepage from "./Home-module/homepage";


function App() {

  const router=createBrowserRouter([
      {element:<Homepage></Homepage> ,path:"/"}
    ,{element:<Login></Login>, path:"/login" },
    { element:<Forgot /> , path:"/forgotPassword" },
    {element:<Profile/>,path:"/profile"}

    
  ])


  return (
   
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
     
      <RouterProvider router={router} >
     </RouterProvider>
      {/* <Profile></Profile> */}

    {/* <Login></Login> */}
     
     {/* <Forgot></Forgot> */}

      
    </div>
  );
}

export default App;
