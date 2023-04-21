import { ThemeProvider } from "@emotion/react"
import { GlobalStyle1 } from "../../Components/stylecomponent/forFirstDiv"
import { Grid, Paper , TextField, Button, Input,Box,Link,Typography,Container} from "@mui/material";
import FingerprintIcon from '@mui/icons-material/Fingerprint';


export default function DataUpload(){
    const button1={backgroundColor:"#2196F3",color:"white",borderRadius:"20px",marginBottom:"20px",width:"22%"}
    const textfield1={width: 400,height:100}
   
return(
    <Box style={{backgroundColor:"#FFFFFF",height:"92vh"}}>

    <Box sx={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    }}>
        <Box>
            <FingerprintIcon sx={{
                fontSize: '80px',
                borderRadius: '50%',
                backgroundColor: '#2196F3',
                color: 'black',
                margin: '10px 100px',
                padding: '10px'
            }} />

            <Typography variant='h4' color="#2196F3" sx={{marginLeft:5}}>
                Biometric Data
            </Typography>
        </Box>
    </Box>
    <hr color='white' />
    <Container style={{padding:"20px",marginTop:100}}>
        <Paper elevation={0} style={{width:"auto"}} >

        
        <Box sx={{ flexFlow: 1 }}>
            <Grid container spacing={1} gap={3}  justifyContent={"center"} alignItems={"center"} alignContent={"center"}>

                <Grid item xs={12} sx={{display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}>
                    <TextField className='outlined-basic-text-box' id="outlined-basic" label="Biometric" variant="outlined" style={textfield1}  type='file'/>
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