
import Forgot from "./Pages/user-module/Forgot"
import Login from "./Pages/user-module/Login";
import { Route,Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Profile from "./Pages/user-module/Profile";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import ResponsiveAppBar from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Home-module/homepage";
import AlertDialog from "./Components/HelperComponent/DialogBox";
import DataUpload from "./Pages/user-module/DataUpload";
import UserRoute from "./Pages/user-module/UserRoute";
import { theme } from "./Components/stylecomponent/theme";
import CreateEmployee from "./Pages/Employee/CreateEmployee";
import { ThemeProvider } from "@emotion/react";
import ResetPassword from "./Pages/user-module/ResetPassword";
import SideNavBar from "./Components/Navbar/SideNavBar";



function App() {
//   const router=createBrowserRouter([
//     {element:<Homepage></Homepage> ,path:"/"}
//   ,{element:<Login></Login>, path:"/login" },
//   { element:<Forgot /> , path:"/forgotPassword" },
//   {element:<Profile/>,path:"/profile"},
//   {element:<AlertDialog></AlertDialog>,path:"/dialog"},
//   {element:<DataUpload></DataUpload>,path:"/fileupload"},
//   {element:<CreateEmployee></CreateEmployee>,path:"/create-employee"},
//   {element:<UserRoute></UserRoute>,path:"/user"},
//   {element:<ResetPassword></ResetPassword>,path:"/reset-password"},
//   {element:<SideNavBar></SideNavBar>,path:"/sidenavbar"}

// ])
  

  return (
    <ThemeProvider theme={theme}>
      {/* <ResponsiveAppBar></ResponsiveAppBar> */}
      <BrowserRouter>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/user" element={<UserRoute />}>
          <Route index path="profile" element={<Profile />} />
          <Route index path="create-employee" element={<CreateEmployee />} />
        </Route>
      </Routes>


    </BrowserRouter>
        {/* <RouterProvider router={router} > */}
     {/* </RouterProvider> */}
   
    </ThemeProvider>



  );
}

export default App;
