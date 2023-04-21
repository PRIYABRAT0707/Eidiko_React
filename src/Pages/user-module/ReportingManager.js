

import Person3Icon from '@mui/icons-material/Person3';
import { Box,TextField,Typography,Paper,Grid,Container} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Button from '@mui/material/Button';
import { useState } from 'react';
import userServiceModule from '../../Services/user-service/UserService';
import Swal from 'sweetalert2';


export default function ReportingManager(){
    const button1={backgroundColor:"#2196F3",color:"#FFFFFF",borderRadius:"20px",marginBottom:"20px",width:"22%"}
    const textfield1={width: 400}

    let date1=new Date("2000-05-11")
    let date2=new Date("2000-05-11")
    const [manager, setManager]=useState({
        "empId":"",
        "managerId":"",
        "startDate":date1,
        "endDate":date2
    
    })
   // console.log(manager)
   const [state, setState] =useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
});
const { vertical, horizontal, open } = state;


const reportingManagerHandle=(e)=>{
    e.preventDefault()
    userServiceModule.reportingManager(manager).then((res)=>{
        //console.log(res)
        if(res.status===200 && res.data.statusMessage==='success'){
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


    
    return(
        <Box style={{backgroundColor:"#FFFFFF",height:"92vh"}}>

        <Box sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center'
        }}>
            <Box>
                <Person3Icon sx={{
                    fontSize: '80px',
                    borderRadius: '50%',
                    backgroundColor: '#2196F3',
                    color: 'black',
                    margin: '10px 100px',
                    padding: '10px'
                }} />

                <Typography variant='h4' color="#2196F3">
                    Reporting Manager
                </Typography>
            </Box>
        </Box>
        <hr color='white' />
        <Container style={{padding:"20px"}}>
            <form onSubmit={reportingManagerHandle}>
            <Paper elevation={0} style={{width:"auto"}} >

            
            <Box sx={{ flexFlow: 1 }}>
                <Grid container spacing={1} gap={3}  justifyContent={"center"} alignItems={"center"} alignContent={"center"}>

                    <Grid item xs={12} sx={{display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                        <TextField required value={manager.empId} name="empId" onChange={(e)=>{setManager({...manager, empId:e.target.value})}} className='outlined-basic-text-box' id="outlined-basic" label="Employee Id" variant="outlined" style={textfield1}  type='number'/>
                    </Grid>
                    <Grid item xs={12} sx={{display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                        <TextField required value={manager.managerId} onChange={(e)=>{setManager({...manager, managerId:e.target.value})}} className='outlined-basic-text-box' id="outlined-basic" label="Manager Id" variant="outlined" style={textfield1} type='number' />
                    </Grid>
                   
                    <Grid item xs={12} sx={{display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>

                            <DatePicker label="Start Date" defaultValue={dayjs('2023-01-01')} className='outlined-basic-text-box'  sx={{width:400}} />
                        </LocalizationProvider> */}

              <TextField required value={manager.startDate} onChange={(e)=>{setManager({...manager, startDate:e.target.value})}} className='outlined-basic-text-box' id="outlined-basic1" label="End Date" variant="outlined" style={textfield1} type='date'
                                        
                                    />  

                    </Grid >
                    <Grid item xs={12} sx={{display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>

                            <DatePicker label="End Date" defaultValue={dayjs('2023-01-01')} className='outlined-basic-text-box'  sx={{width:400}} />
                        </LocalizationProvider> */}

                        <TextField className='outlined-basic-text-box' id="outlined-basic1" label="End Date" variant="outlined" style={textfield1} type='date'
                                    value={manager.endDate} onChange={(e)=>{setManager({...manager, endDate:e.target.value})}}
                                 required   />  

                    </Grid >
                   
                    <Grid item xs={12} sx={{display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                        <Button type='submit' disableElevation variant="contained" style={button1}>Submit</Button>
                    </Grid>

                </Grid>
            </Box>
            </Paper>
            </form>
        </Container>
    </Box>

               


    )



}