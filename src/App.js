
import Forgot from "./Pages/user-module/Forgot"
import Login from "./Pages/user-module/Login";
import { Route,Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Profile from "./Pages/user-module/Profile";
import ResponsiveAppBar from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Home-module/homepage";
import UserRoute from "./Pages/user-module/UserRoute";
import { theme } from "./Components/stylecomponent/theme";
import CreateEmployee from "./Pages/Employee/CreateEmployee";
import { ThemeProvider } from "@emotion/react";
import WorkInfo from "./Pages/user-module/WorkInfo";
import ShiftTimings from "./Pages/user-module/ShiftTimings";
import ReportingManager from "./Pages/user-module/ReportingManager";
import ResetPassword from "./Pages/user-module/ResetPassword";
import DataUpload from "./Pages/user-module/DataUpload";



function App() {

  

  return (
    <ThemeProvider theme={theme}>
      
      <BrowserRouter>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgot />} />

        <Route path="/user" element={<UserRoute />}>
          <Route index path="profile" element={<Profile />} />
          <Route index path="create-employee" element={<CreateEmployee />} />
          <Route index path="workinfo" element={<WorkInfo />} />
          <Route index path="shifttimings" element={<ShiftTimings />} />
          <Route index path="reporting-manager" element={<ReportingManager></ReportingManager>}></Route>
          <Route index path="change-password" element={<ResetPassword />} />
          <Route index path="biometric" element={<DataUpload />} />

        </Route>
      </Routes>


    </BrowserRouter>
     
   
    </ThemeProvider>



  );
}

export default App;
