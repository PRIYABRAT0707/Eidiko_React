import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Grid } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
// import { useNavigate } from 'react-router-dom';




const columns = [
  { id: 'id', 
  label: 'Emp Id',
    minWidth: 100,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
    },
    { id: 'task', 
    label: 'Task Details',
    minWidth: 130,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
    },

  {
    id: 'description',
    label: 'Description',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'assigned_by',
    label: 'Assigned By',
    minWidth: 130,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'assigned_date',
    label: 'Assigned Date',
    minWidth: 120,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'team',
    label: 'Team',
    minWidth: 100,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(id , task , description, assigned_by , assigned_date,status,team) {
 
  return { id , task , description, assigned_by , assigned_date,status,team };
}

const rows = [
  createData('2001', 'tabelCreation','tabel creation in db and mui','756','2023-22-02','inprogress','microservice'),
  createData('2003', ' optimized access',' optimizing access to server for aclient ','656','2023-29-11','completed','datapower'),
  createData('2002', 'testing','verified zomato app suspension','856','2023-15-01','completed','testing'),

];

export default function EmpDailyStatusR() {

    //  let history= useHistory();
    
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // const navigate = useNavigate();

  return (
    <div className='App'>
    <Grid  display={"flex"}  alignItems={"center"} justifyItems={"center"} marginTop={"65px"}>
    <Paper style={{ maxWidth: 970, padding: "13px 5px", margin: "0 auto" }}item xs={12} >
        <Grid style={{textAlign:"center"}}>
        <MenuBookIcon sx={{
            fontSize:'80px',
            borderRadius:'50%',
            backgroundColor:'#2196F3',
            color:'white',
            margin:'8px 1px',
            padding:'10px'
           }}/>  
        </Grid>
        <center> <h2>Your Daily Status Report</h2></center>
{/* Link DailyReport with this Button */}    
        <Grid style={{textAlign:"right"}}>
        <Button variant='contained' style={{fontWeight:"bold",backgroundColor:'#2196F3'}}  endIcon={<SendIcon />} >
                    Create New
            </Button>
        </Grid>
          
      <TableContainer sx={{ maxHeight: 440,marginTop:"10px" }}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead  >
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, 
                  backgroundColor:"#2196F3",
                  color:"white",
                  fontWeight:"bold" }} >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody >
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