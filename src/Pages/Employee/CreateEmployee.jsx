import { Person, PersonAddAlt1Outlined, PersonAddAlt1Rounded, PersonAddAltTwoTone, PersonAddOutlined } from '@mui/icons-material'
import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import {Paper} from '@mui/material';

const CreateEmployee = () => {

    const [wl, setwl] = useState(20);
    const button1={backgroundColor:"#2196F3",color:"white",borderRadius:"20px",marginBottom:"20px",width:"40%",marginRight:"100px"}
const textfield1={width: 350}

    return (



        <Box style={{backgroundColor:"white",height:"92vh"}}>

            <Box sx={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center'
            }}>
                <Box>
                    <PersonAddOutlined sx={{
                        fontSize: '80px',
                        borderRadius: '50%',
                        backgroundColor: '#1E7DC1',
                        color: 'white',
                        margin: '10px 100px',
                        padding: '10px'
                    }} />

                    <Typography variant='h4' color="white">
                        Create Employee
                    </Typography>
                </Box>
            </Box>
            <hr color='white'/>
            <Container>
                <Paper >

                
                <Box sx={{ flexFlow: 1 }}>
                    <Grid container spacing={1} gap={2}  justifyContent={"center"} alignItems={"center"} alignContent={"center"}>
                        <Grid item md={5}>
                            <TextField className='outlined-basic-text-box' id="outlined-basic" label="Employee Id" variant="outlined" style={textfield1} />
                        </Grid>
                        <Grid item md={5}>
                            <TextField className='outlined-basic-text-box' id="outlined-basic" label="Employee Name" variant="outlined" style={textfield1} />
                        </Grid>
                        <Grid item md={5}>
                            <TextField className='outlined-basic-text-box' id="outlined-basic" label="Employee EmailId" variant="outlined" style={textfield1}  />
                        </Grid>
                        <Grid item md={5}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>

                                <DatePicker label="Date Of Joining" defaultValue={dayjs('2023-01-01')} className='outlined-basic-text-box'   sx={{width:350}} />
                            </LocalizationProvider>

                        </Grid>
                        <Grid  item md={5}>
                            <TextField className='outlined-basic-text-box' id="outlined-basic" label="Contact No" variant="outlined" style={textfield1} />
                        </Grid>
                        <Grid item md={5}>
                            <TextField className='outlined-basic-text-box' id="outlined-basic" label="Manager Id" variant="outlined" style={textfield1} />
                        </Grid>
                        <Grid  item md={5}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <TimePicker className='outlined-basic-text-box'
                                    label="Shift Start Time"
                                    defaultValue={dayjs('2022-04-17T15:30')}
                                    sx={{width:350}}
                    
                                     />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item md={5}>
                           
                           <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <TimePicker className='outlined-basic-text-box'
                                    label="Shift End Time"
                                    defaultValue={dayjs('2022-04-17T15:30')} 
                                    sx={{width:350}}  />
                            </LocalizationProvider>
                            
                        </Grid>
                        <Grid item md={5}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl style={textfield1}>
                                    <InputLabel id="demo-simple-select-label">Work Location</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={wl}
                                        label="WorkLocation"

                                    >
                                        <MenuItem value={10}>CLIENT_LOCATION</MenuItem>
                                        <MenuItem value={20}>WFO</MenuItem>
                                        <MenuItem value={30}>WFH</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item md={5}>
                            <TextField className='outlined-basic-text-box' id="outlined-basic" label="Location" variant="outlined" style={textfield1} />
                        </Grid>
                        <Grid item md={10} sx={{display:'flex',
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