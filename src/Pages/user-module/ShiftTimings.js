
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
import { useEffect, useState } from 'react';
import userServiceModule from '../../Services/user-service/UserService';
import { TimeFormat } from '../../Components/HelperComponent/TimeFormat';



export default function ShiftTimings(){

    // const hour1=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    const minute1=[0,15,30,45,60]
    const textfield1 = { width: 400 }

    const button1={backgroundColor:"#2196F3",color:"white",borderRadius:"20px",marginBottom:"20px",width:"22%"}

    const[checkValue,setCheckValue]=useState([])
    const[startTime,setStartTime]=useState({"startHour":"","startMinute":""})
    const[endTime,setEndTime]=useState({"endHour":"","endMinute":""})
    const getime11=(e)=>{setStartTime({...startTime, [e.target.name]: e.target.value})}
    const getTime12=(e)=>{setEndTime({...endTime, [e.target.name]: e.target.value})}
    const [startDate,setstartDate]=useState(new Date("2000-01-01"))
    const [endDate,setEndDate]=useState(new Date("2000-01-01"))

    // const [shiftTimings,setshiftTimings]=useState({
    //   "weekOff":checkValue,
    //   "startDate":startdate,
    //   "endDate":enddate,
    //   "shiftStartTime":startTime ,
    //   "shiftEndTime":endTime
    // })

      const handlechange=(e)=>{
        const { value, checked } = e.target;

        let arr1=checkValue
        if(checked){
          arr1.push(value)
          setCheckValue(arr1)
        }
        else{
       arr1=arr1.filter((e)=>e!==value)
        setCheckValue(arr1)
        }
      }
    
      const shiftTimingsHandle=(e)=>{
        e.preventDefault()
        let startTime3=startTime.startHour+":"+startTime.startMinute+":"+"00"
        let endTime3=endTime.endHour+":"+endTime.endMinute+":"+"00"
       // TimeFormat.TimeFormat1("08:08:00","hh:mm:ss")
        //console.log(startTime3)

        userServiceModule.shiftTimingsService(checkValue,startDate,endDate,startTime3,endTime3).then((res)=>{
          console.log(res)
          // if(res.status===201){
          //   console.log("success")
          // }
          // else{
          //   console.log("denied")
          // }
        }).catch((error)=>console.log(error))



      }
  //  console.log(checkValue)
  //  console.log(startDate)
  //  console.log(endDate)
  //  console.log(startTime)
  //  console.log(endTime)

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
  <form onSubmit={shiftTimingsHandle}>
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

      <FormGroup id="check-box-data" aria-label="position" row  >
      
        <FormControlLabel
          control={<Checkbox />}
          label="Mon"
          name="weekoff"
          value="Mon"
          onChange={handlechange}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Tue"
          name="weekoff"
          value="Tue"
          onChange={handlechange}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Wed"
          name="weekoff"
          value="Wed"
          onChange={handlechange}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Thur"
          name="weekoff"
          value="Thur"
          onChange={handlechange}
        />
         <FormControlLabel
          control={<Checkbox />}
          label="Fri"
          name="weekoff"
          value="Fri"
          onChange={handlechange}
        />
         <FormControlLabel
          control={<Checkbox />}
          label="Sat"
          name="weekoff"
          value="Sat"
          onChange={handlechange}
        />
         <FormControlLabel
          control={<Checkbox />}
          label="Sun"
          name="weekoff"
          value="Sun"
          onChange={handlechange}
        />
      </FormGroup>
    </FormControl>
   </Grid>
   {/* <Grid item xs={12} sx={{display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                            <TextField value={shiftTimings} onChange={getData} className='outlined-basic-text-box' id="outlined-basic" label="Employee Id" variant="outlined"  sx={{width:400}}/>
                        </Grid> */}

   <Grid item xs={12} sx={{display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>

                                <DatePicker onChange={getData} id="start-date1" label="Start Date" defaultValue={dayjs('2023-01-01')} className='outlined-basic-text-box'  sx={{width:400}} />
                            </LocalizationProvider> */}
                            <TextField className='outlined-basic-text-box' id="outlined-basic" label="Start Date" variant="outlined" style={textfield1} type='date'
                                        value={startDate}
                                        onChange={(event) =>setstartDate(event.target.value)}
                                    />

     </Grid >
     <Grid item xs={12} sx={{display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>

                                <DatePicker onChange={getData} label="End Date" defaultValue={dayjs('2023-01-01')} className='outlined-basic-text-box'  sx={{width:400}} />
                            </LocalizationProvider> */}

<TextField className='outlined-basic-text-box' id="outlined-basic1" label="End Date" variant="outlined" style={textfield1} type='date'
                                        value={endDate}
                                        onChange={(event) => {setEndDate(event.target.value)}}
                                    />  

     </Grid >


     <Grid item xs={12} sx={{display:'flex',justifyContent:'center',
                        alignItems:'center'
                        
   
   }}>


<Box sx={{width:400}}>
<Typography variant='h6'>Shift Start</Typography>

 
        <TextField name="startHour"  value={startTime.startHour} onChange={getime11} label="Hour" type="number"  InputProps={{ inputProps: { max:23,min:0} }} sx={{width:190}}></TextField>
   

 <FormControl sx={ {width: 190,marginLeft:2.5 }}>
<InputLabel id="demo-multiple-name-label">Minute</InputLabel>
        <Select value={startTime.startMinute} onChange={getime11}
          labelId="demo-multiple-name-label"
          id="demo-multiple-start"
          name="startMinute"
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


{/*  this grid for shift end time */}

<Grid item xs={12} sx={{display:'flex',justifyContent:'center',
                        alignItems:'center'
                        
}}>
    <Box sx={{width:400}}>

<Typography variant='h6'>Shift End</Typography>

 
        <TextField name="endHour" value={endTime.endHour} onChange={getTime12} label="Hour"  type="number"  InputProps={{ inputProps: { max:23,min:0} }} sx={{width:190}}></TextField>
   

 <FormControl sx={ {width: 190,marginLeft:2.5 }}>
<InputLabel id="demo-multiple-name-label">Minute</InputLabel>
        <Select
        name="endMinute"
        value={endTime.endMinute}
          labelId="demo-multiple-name-label"
          id="demo-multiple-end"
          onChange={getTime12} >
          {minute1.map((minute2) => (
            <MenuItem
              key={minute2}
              value={minute2}
            >
              {minute2}
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
                            <Button  type="submit" variant="contained" style={button1}>Update</Button>
                        </Grid>


    







               </Grid>



</Box>

</Paper>
</form>
</Container>
</Box>
)


}