
import { useState } from "react"
import { GlobalStyle1 } from "../stylecomponent/forFirstDiv"
import { Container, Grid,Paper } from "@mui/material"
import { Padding } from "@mui/icons-material"

export default function Profile(){

    const grid2={height:"100%",width:"100%",backgroundColor:"#42a5f5"}
    const grid4={height:"90vh",width:"90vw"}
   
   
   return (

<Grid container spacing={0} item xs={12} style={GlobalStyle1} display="flex"
  justifyContent="center"
  alignItems="center">

   
   <Grid item  xs={2} md={2} style={grid4}>
    <Paper elevation={14} style={grid2}>
        

    </Paper>
  </Grid>


  <Grid item  xs={10} md={10} style={grid4}>
    <Paper elevation={14} style={grid2}>xs=6 md=4</Paper>
  </Grid>


 


  </Grid>





    )
}