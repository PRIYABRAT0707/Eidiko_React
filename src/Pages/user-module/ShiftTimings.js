
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import { Box,Container,Typography } from '@mui/material';
import {Paper,Grid} from '@mui/material';
import {Checkbox} from '@mui/material';
import {FormControl,FormLabel,FormGroup,FormControlLabel} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import {OutlinedInput} from '@mui/material';
import {InputLabel} from '@mui/material';
import {Select} from '@mui/material';
import {MenuItem} from '@mui/material';
import {Button} from '@mui/material';
import {TextField} from '@mui/material';



export default function ShiftTimings(){

    const hour1=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    const minute1=[0,15,30,45,60]
    const button1={backgroundColor:"#2196F3",color:"white",borderRadius:"20px",marginBottom:"20px",width:"22%"}

return(
    <Box style={{backgroundColor:"#FFFFFF",height:"92vh"}}>

<Box sx={{
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    height:150
}}>
    <Box>
        <HourglassBottomIcon sx={{
            fontSize: '80px',
            borderRadius: '50%',
            backgroundColor: '#2196F3',
            color: 'black',
            margin: '10px 100px',
            padding: '10px',
        }} />

        <Typography style={{marginLeft:"40px"}} variant='h4' color="#2196F3">
            Shift Timing
        </Typography>
    </Box>
    </Box>
<hr color='white' />

<Container style={{padding:"2px"}}>
                <Paper elevation={0} style={{width:"auto"}} >

                <Box sx={{ flexFlow: 1 }}>
                <Grid container spacing={1} gap={2}  justifyContent={"center"} alignItems={"center"} alignContent={"center"}>

                <Grid item xs={12} sx={{display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
<FormControl component="fieldset">

      <FormLabel component="legend" sx={{justifyContent:'center',alignContent:'center',display:'flex',alignContent:'center'}}>
        <Typography variant='h5' color="#2196F3">Week off</Typography>
        </FormLabel>

      <FormGroup aria-label="position" row>
        <FormControlLabel
          control={<Checkbox />}
          label="Mon"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Tue"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Wed"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Thur"
        />
         <FormControlLabel
          control={<Checkbox />}
          label="Fri"
        />
         <FormControlLabel
          control={<Checkbox />}
          label="Sat"
        />
         <FormControlLabel
          control={<Checkbox />}
          label="Sun"
        />
      </FormGroup>
    </FormControl>
   </Grid>
   <Grid item xs={12} sx={{display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                            <TextField className='outlined-basic-text-box' id="outlined-basic" label="Employee Id" variant="outlined"  sx={{width:400}}/>
                        </Grid>

   <Grid item xs={12} sx={{display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>

                                <DatePicker label="Start Date" defaultValue={dayjs('2023-01-01')} className='outlined-basic-text-box'  sx={{width:400}} />
                            </LocalizationProvider>

     </Grid >
     <Grid item xs={12} sx={{display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>

                                <DatePicker label="End Date" defaultValue={dayjs('2023-01-01')} className='outlined-basic-text-box'  sx={{width:400}} />
                            </LocalizationProvider>

     </Grid >


     <Grid item xs={12} sx={{display:'flex',justifyContent:'center',
                        alignItems:'center'
                        
   
   }}>


<Box sx={{width:400}}>
<Typography variant='h6'>Shift Start</Typography>

   <Grid container direction={"row"} gap={2}>
   
    <Grid item xs={12} sx={{display:'flex',justifyContent:'center',
                        alignItems:'center'}}>

        <TextField label="Hour" type="number"  InputProps={{ max: 24, min: 0 }} style={{display:"flex",width:"auto"}}></TextField>
    </Grid>
    <Grid item xs={12} sx={{display:'flex',justifyContent:'center',
                        alignItems:'center'}}>
    <TextField label="Minute" type="number"  InputProps={{ max: 60, min: 0 }} style={{display:"flex",width:"auto"}}></TextField>
    </Grid>

   </Grid>
   </Box>

</Grid>

{/*  this grid for shift end time */}

<Grid item xs={12} sx={{display:'flex',justifyContent:'center',
                        alignItems:'center'
                        
                    }}>

    <Box sx={{width:400}}>
                  <Typography variant='h6'>Shift End</Typography> 

         <FormControl sx={{ width: 150 }}>
        <InputLabel id="demo-multiple-name-label">Hour</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
        >
          {hour1.map((hour) => (
            <MenuItem
              key={hour}
              value={hour}
            >
              {hour}
            </MenuItem>
          ))}
        </Select>
        
</FormControl>

    <FormControl sx={{ m: 1, width: 150 }}>
<InputLabel id="demo-multiple-name-label">Minute</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
        >
          {minute1.map((minute1) => (
            <MenuItem
              key={minute1}
              value={minute1}
            >
              {minute1}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </Box> 
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