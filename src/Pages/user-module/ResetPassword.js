import { Grid,Paper,TextField,Link } from "@mui/material";
import eidiko1 from "../../images/eidiko1.jpg";
import { GlobalStyle1 } from "../../Components/stylecomponent/forFirstDiv";
import {Button} from "@mui/material";
import {Avatar} from "@mui/material";

export default function ResetPassword(){
    const button1={backgroundColor:"#2196F3",color:"white",borderRadius:"20px",marginTop:"20px",width:"40%"}
    const item1={
        item2:{
            marginTop:"40px",
            display:"flex"


        },
        item3:{
            marginTop:"10px",
            display:"flex"

        }
       
    }


    return(

        <Grid container style={GlobalStyle1} alignContent={"center"} justifyContent={"center"} alignItems={"center"}>
        <Grid item display={"flex"}  >
  <Paper style={{height:"79vh",width:"450px"}}>
  <Grid container direction={"column"} spacing={0} >
 
 
 <Grid item display={"flex"} justifyContent={"center"} >
 <Avatar  sx={{ width: 120, height: 120,backgroundColor:"#2196F3"}}>
 <img   src={eidiko1} style={{display:"flex",height:"100px",width:"150px"}} alt="not found"></img>
 </Avatar>
 </Grid>
 <Grid item display={"flex"} justifyContent={"center"} style={item1.item2}>
    <TextField label="Old Password" id="old-password" type="text" placeholder="Old Password" sx={{width:350}}></TextField>
 
     </Grid>

     <Grid item display={"flex"} justifyContent={"center"} style={item1.item2}>
    <TextField label="New Password" id="new-password" type="text" placeholder="New Password" sx={{width:350}}></TextField>
 
     </Grid>

     <Grid item display={"flex"} justifyContent={"center"} style={item1.item2}>
    <TextField label="Confirm Password" id="Confirm-password" type="text" placeholder="Confirm Password" sx={{width:350}}></TextField>
 
     </Grid>

     <Grid  container
   direction="row"
   justifyContent="center"
   alignItems="center">
  <Link href="/profile"><p style={{display:"flex",marginLeft:"250px"}}>Back to profile</p></Link>
 
  </Grid>
 
 <Grid item display={"flex"} justifyContent={"center"}  style={item1.item3}>
     <Button style={button1} variant="contained">Submit</Button>
 </Grid>
 
 </Grid>
 
 
 
  </Paper>
 
        </Grid>
 
 
        </Grid>

    )
}