import { Grid, Paper,TextField,Button,Link, Avatar } from "@mui/material";
import eidiko1 from '../images/eidiko1.jpg';
import img2 from '../images/img2.png';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import validation from "../Error/LoginErrorHandler";
import passwordErrorHandler from "../Error/passwordErrorHandler";
import { baseUrl } from "../user-service/baseUrl";
import { GlobalStyle1 } from "../stylecomponent/forFirstDiv";
import { Form } from "react-router-dom";




export default function Login(){
    
   

    const grid2={height:"100%",width:"100%",backgroundColor:"#2196F3"}
    const grid3={height:"100%",width:"100%",backgroundColor:"FFFFFF", display: "flex",justifyContent: "center",alignItems: "center",textAlign: "center",verticalAlign: "middle"}
    const button1={backgroundColor:"#2196F3",color:"white",width:"290px",borderRadius:"20px",marginTop:"20px",display:"flex"}
   

    const[employeeId,setEmployeeId]=useState("")
    const[password,setPassword]=useState("")

    const[error,setError]=useState("")
   


    const navigate=useNavigate()
    const[validationError,setValidationError]=useState({})
    const[validationError1,setValidationError1]=useState({})

    
    const HandleEmployeeId=(e)=>{
        
        setEmployeeId(e.target.value)
    }
    const HandlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const loginHandle=(e)=>{
           e.preventDefault()
           
       setValidationError(validation(employeeId))

       setValidationError1(passwordErrorHandler(password))


        axios.post(`${baseUrl}/auth/login`,{
            username:employeeId,
            password:password
        }).then(result=>{
            if(result.status===200){
                navigate("/profile")
                localStorage.setItem("token",result.data.token)

            }
            else{
                navigate("/login")
            }

        })
    .catch(error=>{
        setError(error)
        
    })

    }



    
   
  

return(

// main grid starts here
  <div style={GlobalStyle1}>

 <Grid display="flex"
  justifyContent="center"
  alignItems="center" container spacing={0} item xs={12}  style={{paddingLeft:"40px",paddingRight:"40px"}}>



{/* child 1 grid starts here */}
 <Grid display="flex"
  justifyContent="center"
  alignItems="center"
  item xl={6} lg={6} md={6} sm={12} xs={12} xsoffset="auto" mdoffset="auto" style={{height:"91vh",width:"70vw"}}>

 <Paper elevation={10} style={grid3}>

   

 < Grid container 
 display="grid"
 direction="column"
 justifyContent="center"
alignContent="center"

>
<Grid  display="flex" alignItems={"center"} justifyContent={"center"}> 
<Avatar  sx={{ width: 120, height: 120,backgroundColor:"#2196F3"}}>
<img   src={eidiko1} style={{display:"flex",height:"100px",width:"150px"}} alt="not found"></img>
</Avatar>
</Grid>

 <Grid  display="flex" alignItems={"center"} justifyContent={"center"}>
 <h3>Login</h3>
 </Grid>

<Form onSubmit={loginHandle} >

 <Grid container direction="row"  display="flex" alignItems={"center"} justifyContent={"center"} style={{marginTop:"20px"}}>

<TextField  value={employeeId}  onChange={HandleEmployeeId} id="employeeId1" label="EmployeeId" name="employeeid" type="number" max="4" placeholder="employeeId" fullWidth required></TextField>
 </Grid>
 {validationError.name && <p style={{color:"red",fontSize:"15px"}}>{validationError.name}</p>}



 <Grid display="flex" alignItems={"center"} justifyContent={"center"} style={{marginTop:"30px"}}>

 <TextField  value={password}  onChange={HandlePassword}   style={{borderRadius:"20px"}} id="password1" label="Password"  name="password" type="password" placeholder="password"  fullWidth required
 
 ></TextField>
 
 </Grid>
 {validationError1.name && <p style={{color:"red",fontSize:"15px"}}>{validationError1.name}</p>}


 <Grid  container
  direction="row"
  justifyContent="center"
  alignItems="flex-end"
  >
 <Link href="/forgotPassword"><h6 style={{marginLeft:"220px",marginTop:"5px"}}>forgot password?</h6></Link>

 </Grid>

  <Grid display={"flex"} alignItems={"center"} justifyContent={"center"}>
     <Button id="loginbutton" variant="contained" style={button1}  type="submit">login</Button>
</Grid>

</Form>


</Grid>


</Paper>

 </Grid>


 {/* child1 grid ends here */}


  {/* child2 grid starts here */}

 <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}  style={{height:"91vh",width:"600px"}}>
    <Paper elevation={10} style={grid2}>


    <img src={img2} style={{height:"100%",width:"100%"}} alt="not found"></img>

    </Paper>


    </Grid>


 {/* child2 grid ends here */}

 
</Grid>
</div>
// main grid ends here
        

    );

}