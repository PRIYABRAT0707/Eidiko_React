import { Grid,Paper,TextField,Link } from "@mui/material";
import {Button} from "@mui/material";
import LockResetIcon from '@mui/icons-material/LockReset';
import {Box,Container,Typography} from "@mui/material";

export default function ResetPassword(){
    
    const button1={backgroundColor:"#2196F3",color:"white",borderRadius:"20px",marginBottom:"20px",width:"22%"}
    const textfield1={width: 400}

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
            <Paper elevation={0} style={{width:"auto"}} >

            
            <Box sx={{ flexFlow: 1 }}>
                <Grid container spacing={1} gap={3}  justifyContent={"center"} alignItems={"center"} alignContent={"center"}>

                    <Grid item xs={12} sx={{display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                        <TextField className='outlined-basic-text-box' id="outlined-basic" label="Old Password" variant="outlined" style={textfield1}  type='text'/>
                    </Grid>


                    <Grid item xs={12} sx={{display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                        <TextField className='outlined-basic-text-box' id="outlined-basic" label="New Password" variant="outlined" style={textfield1} type='text' />
                    </Grid>

                    <Grid item xs={12} sx={{display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                        <TextField className='outlined-basic-text-box' id="outlined-basic" label="Confirm Password" variant="outlined" style={textfield1} type='text' />
                    </Grid>



                   
                    
                   
                    <Grid item xs={12} sx={{display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                        <Button variant="contained" style={button1}>Submit</Button>
                    </Grid>

                </Grid>
            </Box>
            </Paper>
        </Container>
    </Box>

        

    )
}