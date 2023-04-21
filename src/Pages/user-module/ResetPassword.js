import { Grid,Paper,TextField,Link } from "@mui/material";
import {Button} from "@mui/material";
import LockResetIcon from '@mui/icons-material/LockReset';
import {Box,Container,Typography} from "@mui/material";
import { useState } from "react";
import userServiceModule from "../../Services/user-service/UserService";
import Swal from "sweetalert2";
import passwordErrorHandler from "../../Error/passwordErrorHandler";

export default function ResetPassword(){
    
    const button1={backgroundColor:"#2196F3",color:"white",borderRadius:"20px",marginBottom:"20px",width:"22%"}
    const textfield1={width: 400}

    const[oldPassword,setOldPassword]=useState("")
    const[newPassword,setNewPassword]=useState("")
    const[confirmPassword,setConfirmPassword]=useState("")
    const[message,setMessage]=useState("")
    const[validationError1,setValidationError1]=useState({})

    const [state, setState] =useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;

const changePasswordHandle=(e)=>{
    e.preventDefault()
    setValidationError1(passwordErrorHandler(oldPassword))
    if(newPassword!==confirmPassword){
        setMessage("New password and confirm password doesn't match")
        return
    }
    else{
 userServiceModule.changePassword(oldPassword,newPassword,confirmPassword).then((res)=>{
    if(res.status===200 && res.data.statusMessage==='success' ){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500
      })
      }
      else{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500
        }
        )
      }
}).catch((error)=>{
    Swal.fire(
        {
            position: 'center',
            icon: 'error',
            title: error.response.data.message,
            showConfirmButton: false,
            timer: 1500
        }

    )
})

    }
}


    return(
        <Box style={{backgroundColor:"#FFFFFF",height:"92vh"}}>

        <Box sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center'
        }}>
            <Box>
                <LockResetIcon sx={{
                    fontSize: '80px',
                    borderRadius: '50%',
                    backgroundColor: '#2196F3',
                    color: 'black',
                    margin: '10px 100px',
                    padding: '10px'
                }} />

                <Typography variant='h4' color="#2196F3">
                    Reset Password
                </Typography>
            </Box>
        </Box>
        <hr color='white' />
        <Container style={{padding:"20px"}}>
            <form onSubmit={changePasswordHandle}>
            <Paper elevation={0} style={{width:"auto"}} >

            
            <Box sx={{ flexFlow: 1 }}>
                <Grid container spacing={1} gap={3}  justifyContent={"center"} alignItems={"center"} alignContent={"center"}>

                    <Grid item xs={12} sx={{display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                        <TextField type="password" value={oldPassword} onChange={(e)=>{setOldPassword(e.target.value)}} required className='outlined-basic-text-box' id="outlined-basic" label="Old Password" variant="outlined" style={textfield1}  />
                    </Grid>
                    {validationError1.name && <Typography variant="h5" style={{color:"red",fontSize:"15px"}}>{validationError1.name}</Typography>}

                    <Grid item xs={12} sx={{display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                        <TextField type="password" value={newPassword} onChange={(e)=>{setNewPassword(e.target.value)}} required className='outlined-basic-text-box' id="outlined-basic" label="New Password" variant="outlined" style={textfield1} />
                    </Grid>
                    {validationError1.name && <Typography variant="h5" style={{color:"red",fontSize:"15px"}}>{validationError1.name}</Typography>}
                    <Grid item xs={12} sx={{display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                        <TextField type="password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} required className='outlined-basic-text-box' id="outlined-basic" label="Confirm Password" variant="outlined" style={textfield1} />
                    </Grid>
                    {validationError1.name && <Typography variant="h5" style={{color:"red",fontSize:"15px"}}>{validationError1.name}</Typography>}


                   
                    
                   
                    <Grid item xs={12} sx={{display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                        <Button type="submit" variant="contained" style={button1}>Submit</Button>
                    </Grid>
                
                    <Typography variant="h4" style={{color:"red",fontSize:"19px"}}>{message}</Typography>

                </Grid>
            </Box>
            </Paper>
            </form>
        </Container>
    </Box>

        

    )
}