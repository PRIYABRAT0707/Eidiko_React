import { Grid, Paper,Link, TextField,Avatar, Box } from "@mui/material"
import { GlobalStyle1 } from "../../Components/stylecomponent/forFirstDiv"
import {Button} from "@mui/material";
import eidiko1 from "../../images/eidiko1.jpg"
import axios from "axios";
import { Navigate } from "react-router";
import { useState } from "react";
import validation from "../../Error/LoginErrorHandler"
import userServiceModule from "../../Services/user-service/UserService"


export default function Forgot(){
    const grid3={height:"89vh",width:"89vw",backgroundColor:"FFFFFF", display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    verticalAlign: "middle"}
    const button1={backgroundColor:"#2196F3",color:"white",width:"260px",borderRadius:"20px",marginBottom:"40px"}

    const [employeeId3,setEmployeeId3]=useState('')
    const[message,setmessage]=useState("")

    const handlePasswordChange=(e)=>{
      setEmployeeId3(e.target.value)
      
    }
    const[validationError,setValidationError]=useState({})

    const forgotPassword=  (e)=>{
      e.preventDefault()
      setValidationError(validation(employeeId3))

     userServiceModule.forgotPasswordService(employeeId3).then((res)=>{

     
      if(res.status===200){
        setmessage(res.data.message)}
       
     }).catch(error=>{
      setmessage(" please enter a valid employee id")
    
   }
   )


    }
   

    return(

     <div style={GlobalStyle1}>

    <Grid display="grid"
  justifyContent="center"
  alignItems="center"
  item xl={6} lg={6} md={6} sm={12} xs={12} xsoffset="auto" mdoffset="auto" style={{height:"100vh",width:"100vw"}}>

     <Paper elevation={10} style={grid3}>
       <Grid display="grid"
  justifyContent="center"
  alignItems="center"
   container direction="column"
  
  >
    

    <Grid  display="flex" alignItems={"center"} justifyContent={"center"}> 
<Avatar  sx={{ width: 120, height: 120,backgroundColor:"#2196F3",marginBottom:"80px"}}>
<img   src={eidiko1} style={{display:"flex",height:"100px",width:"150px"}} alt="not found"></img>
</Avatar>
</Grid>


       <Grid container direction="row"  display="flex" alignItems={"center"} justifyContent={"center"} style={{marginBottom:"20px"}}>
       <h3>Forgot Password </h3>
         </Grid  >
         <Grid container direction="row"  display="flex" alignItems={"center"} justifyContent={"center"} style={{marginBottom:"20px"}}>
         <p>Enter your employee id we'll send you a link to reset your password</p>
         </Grid>

           <Grid container direction="row"  display="block" alignItems={"center"} justifyContent={"center"} style={{marginBottom:"10px"}}>
            
          <TextField value={employeeId3} onChange={handlePasswordChange} name="employeeId3" id="employeeId2"  placeholder="employeeId" label="employeeId" type="number" fullWidth></TextField>

           </Grid>
           {validationError.name && <p style={{color:"red",fontSize:"15px"}}>{validationError.name}</p>}
           <Grid  container
  direction="row"
  justifyContent="flex-end"
  alignItems="center"
  >
 <Link href="/login"><p style={{}}>Back to Login</p></Link>

 </Grid>
          
 
           <Grid>
           <Button onClick={forgotPassword} variant="contained" style={button1}>Submit</Button>
           </Grid> 

<p  style={{color:"green",fontSize:"19px"}}>{message}</p>
           </Grid>

        </Paper>


        </Grid>


         </div>
    );



}