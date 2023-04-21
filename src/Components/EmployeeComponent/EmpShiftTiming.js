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
import AccessTimeIcon from '@mui/icons-material/AccessTime';
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
    {
      id: 'shiftstart',
      label: 'Shift Start Time',
      minWidth: 130,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'shiftend',
      label: 'Shift End Time',
      minWidth: 120,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'weekoff',
      label: 'Week-Off',
      minWidth: 100,
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
  
  function createData(id , startdata , enddate, shiftstart , shiftend , weekoff , modifiedby) {
   
    return {id , startdata , enddate, shiftstart , shiftend , weekoff , modifiedby};
  }
  
  const rows = [
    createData('2001', '2022-12-01','2023-12-19','10:00','19:00','sat,sun','852'),
    createData('2000', '2023-01-31','2023-02-16','10:00','19:00','sat,sun','756'),
    createData('789', '2022-06-15','2022-12-26','19:00','4:00','sun,mon','963'),
    createData('652', '2021-11-05','2022-10-29','10:00','19:00','sat,sun','236'),
  
  ];
export default function EmpShiftTiming(){
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
                    <AccessTimeIcon sx={{
                        fontSize:'80px',
                        borderRadius:'50%',
                        backgroundColor:'#2196F3',
                        color:'white',
                        margin:'8px 1px',
                        padding:'10px'
                    }}/>
                </Grid>
                <center><h2>Employee Shift Timing</h2></center>
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