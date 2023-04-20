import { Grid } from "@mui/material";
import {TextField} from "@mui/material";
import { LocalizationProvider,TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {Box} from "@mui/material";
import {FormControl,InputLabel,Select,MenuItem} from "@mui/material";
import { useState } from "react";
import {Typography} from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';
import {Container,Paper,Button} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";




export default  function WorkInfo(){
    const button1={backgroundColor:"#2196F3",color:"white",borderRadius:"20px",marginBottom:"20px",width:"22%"}
    const textfield1={width: 400}
    const [wl, setwl] = useState();


    return(
        
<Box style={{backgroundColor:"#FFFFFF",height:"92vh"}}>

<Box sx={{
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    boxShadow:0
}}>
    <Box>
        <WorkIcon sx={{
            fontSize: '80px',
            borderRadius: '50%',
            backgroundColor: '#2196F3',
            color: 'black',
            margin: '10px 100px',
            padding: '10px'
        }} />

        <Typography variant='h4' color="#2196F3">
            Working Location
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
                            <TextField className='outlined-basic-text-box' id="outlined-basic" label="Employee Id" variant="outlined"  sx={{width:400}}/>
                        </Grid>

                        <Grid  item xs={12} sx={{display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                            
                            <LocalizationProvider dateAdapter={AdapterDayjs}>

<DatePicker label="Start Date" defaultValue={dayjs('2023-01-01')} className='outlined-basic-text-box'  sx={{width:400}} />
</LocalizationProvider>

                        </Grid>
                        <Grid item xs={12} sx={{display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                           
                           <LocalizationProvider dateAdapter={AdapterDayjs}>

<DatePicker label="End Date" defaultValue={dayjs('2023-01-01')} className='outlined-basic-text-box'  sx={{width:400}} />
</LocalizationProvider>

                            
                        </Grid>

                        <Grid item xs={12} sx={{display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                                <FormControl sx={{display:'flex',width:400}}>
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
                        </Grid>


                        <Grid item xs={12} sx={{display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                            <TextField className='outlined-basic-text-box' id="outlined-basic" label="Location" variant="outlined" style={textfield1} />
                        </Grid>
                        <Grid item xs={12} sx={{display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                            <Button variant="contained" style={button1}>Update</Button>
                        </Grid>

                       </Grid>
                        </Box>

</Paper>
</Container>

</Box>
    )



}