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
import  {FcBusinessman}  from "react-icons/fc";

 import React from "react";

 const columns = [
     { id: 'id', 
     label: 'Emp Id',
       minWidth: 100,
       align: 'left',
       format: (value) => value.toLocaleString('en-US'),
       },
       { 
        id: 'managerid', 
        label: 'ManagerId',
       minWidth: 100,
       align: 'left',
       format: (value) => value.toLocaleString('en-US'),
       },
       {
        id: 'modifiedby',
        label: 'Modified By',
        minWidth: 100,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
      },
      {
        id: 'modifieddate',
        label: 'Modified Date',
        minWidth: 100,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
      },
    
     { id: 'startdata', 
       label: 'Start Date',
       minWidth: 130,
       align: 'left',
       format: (value) => value.toLocaleString('en-US'),
       },
   
     {
       id: 'enddate',
       label: 'End Date',
       minWidth: 170,
       align: 'center',
       format: (value) => value.toLocaleString('en-US'),
     },
   ];
   
   function createData(id ,managerid , modifiedby, modifieddate,startdata , enddate) {
    
     return {id ,managerid , modifiedby, modifieddate,startdata , enddate,};
   }
   
   const rows = [
     createData('2005','1369','1369','2023-04-19', '2022-12-01','2023-12-30'),
     createData('0155','1930','1930','2023-04-19', '2023-01-16','2023-06-15'),
     createData('1699','0356','0352','2023-04-19', '2023-02-01','2023-12-19'),
     createData('2001','0852','0852','2023-04-19', '2023-01-31','2023-05-17'),

   
   ];
 export default function ReportingManager(){
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
                    <FcBusinessman  style={{fontSize:'100px',
                    borderRadius:'50%',
                  backgroundColor:'#2196F3',
                  color:'white',
                 margin:'8px 1px',
                 padding:'10px'}}/>
                    
                 </Grid>
                 <center><h2>Reporting Manager</h2></center>
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