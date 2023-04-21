import React,{useState} from 'react';
import {Grid, TextField} from '@mui/material';
import {CardContent ,Card} from '@mui/material';
import { Button } from '@mui/material';
import {LocalizationProvider} from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import {DatePicker} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import CommentIcon from '@mui/icons-material/Comment';

export default function DailyReport(){
  const[visible,setVisible]=useState(false);
  
    return(
    <div className="App"> 
     
      <Grid display={"flex"} alignItems={"center"} justifyItems={"center"} marginTop={"65px"}>
        
        <Card style={{ maxWidth: 670, padding: "13px 5px", margin: "0 auto" }}>
          <CardContent>
            
          <center>
            
           <CommentIcon sx={{
            fontSize:'80px',
            borderRadius:'50%',
            backgroundColor:'#2196F3',
            color:'white',
            margin:'8px 1px',
            padding:'10px'
           }}/>
          <h2>Daily Status Report</h2>
           
            <form>
              <Grid container spacing={1} >
                
                <Grid item xs={12} sx={{justifyContent:"center",display:"flex"}}>
                  <TextField type="number" label="Task Details" required multiline rows={2} placeholder="Task Deatils" variant='outlined' fullWidth style={{width:"550px",marginTop:"15px"}}></TextField>
                  </Grid>
               
                  <Grid item xs={12} sx={{justifyContent:"center",display:"flex"}}>
                  <TextField label="Task Description" required multiline rows={4} placeholder="Description Your Task Here" variant='outlined' fullWidth style={{width:"550px",marginTop:"15px"}}></TextField>
                  </Grid>
    
                <Grid item xs={12} sx={{justifyContent:"center",display:"flex"}}>
                  <TextField label="Task Assigned By" required  placeholder="Task Assigned By" variant='outlined' fullWidth style={{width:"550px",marginTop:"15px"}}></TextField>
                  </Grid>
                  
                  <Grid item xs={12} sx={{justifyContent:"center",display:"flex"}} style={{width:"550px",marginTop:"15px"}}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Task Assign Date" defaultValue={dayjs('2023-01-01')}
                    className='outlined-basic-text-box' sx={{width:"550px"}}/>
                  </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} sx={{justifyContent:"center",display:"flex"}}>
                  <TextField label="Team Name" required  placeholder="Enter Your Team" variant='outlined' fullWidth style={{width:"550px",marginTop:"15px"}}></TextField>
                  </Grid>
                <Grid  item xs={12}className='form-group row'>
                  <label className='col-sm-4 col-form-label'>Status</label>
                  <Grid className='col-sm-2  mt-2'>
                     Completed<input type="radio" className='mx-2' name="isyes" value="1" onClick={()=>setVisible(false)} style={{accentColor:"green"}}/>
                  </Grid>
                  <Grid className='col-sm-3  mt-2'>
                     Not Completed<input type="radio" className='mx-2' name="isyes" value="0" onClick={()=>setVisible(true)}  style={{accentColor:"red"}}/>
                  </Grid>
                </Grid>
                 
                {
                  visible &&
                  
                <Grid item xs={12} sx={{justifyContent:"center",display:"flex"}}>
                <TextField label="Reason"multiline rows={2} required  placeholder="Enter The Reason" variant='outlined' fullWidth style={{width:"550px",marginTop:"15px"}}/>
                </Grid>
                  
                }
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Report</Button>
                </Grid>
                
              </Grid>
            </form>
            </center>
          </CardContent>
        </Card>
      </Grid>
    </div>
    )
}