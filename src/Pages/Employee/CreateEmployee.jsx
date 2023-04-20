import {  PersonAddOutlined } from '@mui/icons-material'
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import {Paper} from '@mui/material';

const CreateEmployee = () => {

    const button1={backgroundColor:"#2196F3",color:"white",borderRadius:"20px",marginBottom:"20px",width:"18%"}
const textfield1={width: 400}

    return (



        <Box style={{backgroundColor:"#FFFFFF",height:"92vh"}}>

            <Box sx={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center'
            }}>
                <Box>
                    <PersonAddOutlined sx={{
                        fontSize: '80px',
                        borderRadius: '50%',
                        backgroundColor: '#2196F3',
                        color: 'white',
                        margin: '10px 100px',
                        padding: '10px'
                    }} />

                    <Typography variant='h4' color="#2196F3">
                        Create Employee
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
                            <TextField className='outlined-basic-text-box' id="outlined-basic" label="Employee Id" variant="outlined" style={textfield1} />
                        </Grid>
                        <Grid item xs={12} sx={{display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                            <TextField className='outlined-basic-text-box' id="outlined-basic" label="Employee Name" variant="outlined" style={textfield1} />
                        </Grid>
                        <Grid item xs={12} sx={{display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                            <TextField className='outlined-basic-text-box' id="outlined-basic" label="Employee EmailId" variant="outlined" style={textfield1}  />
                        </Grid>
                        <Grid item xs={12} sx={{display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>

                                <DatePicker label="Date Of Joining" defaultValue={dayjs('2023-01-01')} className='outlined-basic-text-box'  sx={{width:400}} />
                            </LocalizationProvider>

                        </Grid >
                        <Grid  item xs={12}sx={{display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                            <TextField className='outlined-basic-text-box' id="outlined-basic" label="Contact No" variant="outlined" style={textfield1} />
                        </Grid>
                       
                        <Grid item xs={12} sx={{display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                            <Button variant="contained" style={button1}>Create</Button>
                        </Grid>

                    </Grid>
                </Box>
                </Paper>
            </Container>
        </Box>

    )
}

export default CreateEmployee