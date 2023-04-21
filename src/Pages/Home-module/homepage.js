import React from 'react'
import { Box } from '@mui/material'
import {Grid} from '@mui/material'
import {Button} from '@mui/material'
import {Link} from '@mui/material'

export default function Homepage() {
  const button1={backgroundColor:"#2196F3",color:"white",borderRadius:"20px",marginBottom:"20px",width:"10%"}
  return (
   <Box style={{backgroundColor:"#FFFFFF",height:"92vh"}}>

       <Grid container >
        <Grid item xs={12} style={{marginTop:"100px"}}>
       <Link href='/login'>  <Button variant="contained" style={button1}>Login</Button>   </Link>
        </Grid>

       </Grid>



    </Box>




  )
}
