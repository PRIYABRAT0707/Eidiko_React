import { 
    Grid, 
     Paper,
      Table,
       TableBody,
        TableCell,
         TableContainer,
          TableHead,
           TablePagination,
           TableRow } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
 import React from "react";
 const columns = [
     { id: 'id', 
     label: 'Emp Id',
       minWidth: 100,
       align: 'left',
       format: (value) => value.toLocaleString('en-US'),
       },
       { id: 'startdata', 
       label: 'Start Date',
       minWidth: 150,
       align: 'left',
       format: (value) => value.toLocaleString('en-US'),
       },
   
     {
       id: 'enddate',
       label: 'End Date',
       minWidth: 150,
       align: 'center',
       format: (value) => value.toLocaleString('en-US'),
     },
     {
       id: 'workfrom',
       label: 'Work From',
       minWidth: 130,
       align: 'center',
       format: (value) => value.toLocaleString('en-US'),
     },
     {
       id: 'location',
       label: 'Work Location',
       minWidth: 130,
       align: 'center',
       format: (value) => value.toLocaleString('en-US'),
     },
    
     {
       id: 'modifiedby',
       label: 'Modified By',
       minWidth: 100,
       align: 'left',
       format: (value) => value.toLocaleString('en-US'),
     },
   ];
   
   function createData(id , startdata , enddate, workfrom , location ,  modifiedby) {
    
     return {id , startdata , enddate, workfrom , location ,  modifiedby};
   }
   
   const rows = [
     createData('2001', '2022-12-01','2023-12-30','WFH','Pune','852'),
     createData('2005', '2023-01-16','2023-06-15','WFO','Bapatle','1930'),
     createData('0155', '2023-02-01','2023-12-19','Client','Dubai','55'),
     createData('1699', '2021-12-01','2023-07-13','CLient','North-Korea','356'),
     createData('1369', '2023-01-31','2023-05-17','WFh','Hyd','741'),
   
   ];
 export default function EmpWorkLoc(){
     const [page, setPage] = React.useState(0);
     const [rowsPerPage, setRowsPerPage] = React.useState(10);
   
     const handleChangePage = (event, newPage) => {
       setPage(newPage);
     };
   
     const handleChangeRowsPerPage = (event) => {
       setRowsPerPage(+event.target.value);
       setPage(0);
     };
 
 return(
     <div className='App'>
         <Grid  display={"flex"}  alignItems={"center"} justifyItems={"center"} marginTop={"65px"}>
             <Paper style={{ maxWidth: 970, padding: "13px 5px", margin: "0 auto" }}item xs={12}>
                 <Grid style={{textAlign:"center"}}>
                     <LocationOnIcon sx={{
                         fontSize:'80px',
                         borderRadius:'50%',
                         backgroundColor:'#2196F3',
                         color:'white',
                         margin:'8px 1px',
                         padding:'10px'
                     }}/>
                 </Grid>
                 <center><h2>Employee Work Location</h2></center>
                 <TableContainer sx={{ maxHeight: 440,marginTop:"10px" }}>
                     <Table stickyHeader aria-label="sticky table">
                         <TableHead>
                             <TableRow>
                             {columns.map((column) => (
                                 <TableCell
                                  key={column.id}
                                 align={column.align}
                                 style={{ minWidth: column.minWidth,
                                  backgroundColor:"#2196F3",
                                  color:"white",
                                  fontWeight:"bold" }}>
                                 {column.label}
                               </TableCell>
                             ))}
                             </TableRow>
                         </TableHead>
                         <TableBody>
                          {rows
                         .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                         .map((row) => {
                             return (
                             <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                 {columns.map((column) => {
                                 const value = row[column.id];
                                 return (
                                     <TableCell key={column.id} align={column.align}>
                                     {column.format && typeof value === 'number'
                                         ? column.format(value)
                                         : value}
                                     </TableCell>
                                 );
                                 })}
                             </TableRow>
                             );
                         })}
                         </TableBody>
                     </Table>
                 </TableContainer>
                 <TablePagination
                     rowsPerPageOptions={[10, 25, 100]}
                     component="div"
                     count={rows.length}
                     rowsPerPage={rowsPerPage}
                     page={page}
                     onPageChange={handleChangePage}
                     onRowsPerPageChange={handleChangeRowsPerPage}
                 />
             </Paper>
         </Grid>
     </div>
     
 );
 
 
 }