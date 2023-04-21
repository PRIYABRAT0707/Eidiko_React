import React, { useEffect, useState } from 'react'
import { Box, Card, CardContent, CardMedia, Collapse, Container, Divider, Grid, List, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import styled from '@emotion/styled';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import { AddLocation, Call, Create, ExpandLess, ExpandMore, SpeakerNotes, StarBorder } from '@mui/icons-material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Navigate, useNavigate } from 'react-router';
import LogoutIcon from '@mui/icons-material/Logout';
import { getProfileData } from '../../Services/ProfileService';
import userServiceModule from '../../Services/user-service/UserService';
import SideNavBar from '../../Components/Navbar/SideNavBar';

const Profile = () => {
    const navigate=useNavigate()


    const [profileData, setProfileData] = useState({});
    const [authorities,setAuthorities] = useState([]);
    const [reportingManagers,setReportingManagers] = useState({})
    const [workLocation,setWorkLocation] = useState({});
    const [shiftTimings,setShiftTimings] = useState({});
    const [dateOfJoining,setDateOfJoining] = useState("");

    async function fetchData() {
        await getProfileData().then(res => {
            setProfileData(res.result);
            setAuthorities(res.result.authorities);
            setReportingManagers(res.reportingManagers[0]);
            setWorkLocation(res.result.employeeWorkingLocations[0]);
            setShiftTimings(res.result.empShiftTimings[0])
            setDateOfJoining(stringToDate(res.result.dateOfJoining));
            console.log(res);
        }).catch(err => {
            console.log(err)
        })
        
    }


    const stringToDate=(date)=>{
        return new Date(date).toISOString().slice(0,10)
    }

    useEffect(() => {
      
        fetchData();
    }, []);
    
    
    return (
      
        <Container sx={{
            margin: '10px 0px'
        }}>
            
            <Typography variant='h5' color="secondary">
                Employee Information
            </Typography>
            <Divider color="secondary" />
            <Box sx={{
                flexGrow: 1,
            }} >
                <Grid container spacing={2}>
                    <Grid item xs={6} md={6}>
                        <Card sx={{
                            display: 'flex',
                            margin: '20px',
                            boxShadow: 'none'
                        }}>

                            <CardMedia
                                component="img"
                                sx={{ width: 151 }}
                                image="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                alt="Live from space album cover"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5" color="secondary">
                                        {profileData.empName}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        (Software  Engineer)
                                    </Typography>
                                </CardContent>

                            </Box>
                        </Card>
                        <Typography variant='h6' color="secondary">
                            About:
                        </Typography>
                        <Typography variant='p' color='text.secondary' sx={{ fontSize: '12px' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorum, dolor facere quas consequatur doloribus optio neque excepturi dolorem fugiat explicabo minima, iste quis mollitia!

                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={6} sx={{
                        margin: '20px 0px'
                    }}>
                        <Box sx={{
                            flexGrow: 1
                        }}>
                            <Grid container spacing={2} sx={{
                                fontSize: '15px'
                            }}>
                                <Grid item xs={6} md={6}>
                                    <Typography variant='p'>
                                        Email
                                    </Typography><br />
                                    <Typography variant='p'>
                                        <strong> {profileData.emailId}</strong>
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <Typography variant='p'>
                                        Role
                                    </Typography><br />
                                    <Typography variant='p'>
                                        <strong>{authorities.map(a=><p>{a.authority},</p>)}</strong>
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <Typography variant='p'>
                                        Designation
                                    </Typography><br />
                                    <Typography variant='p'>
                                        <strong>Software Engineer</strong>
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <Typography variant='p'>
                                        Date Of Joining
                                    </Typography><br />
                                    <Typography variant='p'>
                                        <strong>{dateOfJoining}</strong>
                                    </Typography>
                                </Grid>
                               
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Divider color="secondary" />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{
                    margin: '15px 0px'
                }}>
                    <Grid item xs={6} md={3}>
                        <Card sx={{
                            boxShadow: 'none',
                            backgroundColor: '#BED8FB'
                        }}>

                            <CardContent>
                                <Call />
                                <Typography variant='h6'>
                                    {profileData.contactNo}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Card sx={{
                            boxShadow: 'none',
                            backgroundColor: '#BED8FB'
                        }}>

                            <CardContent>
                                <ManageAccountsIcon />(Reporting Manager)
                                <Typography variant='h6'>
                                    {reportingManagers?.empName}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Card sx={{
                            boxShadow: 'none',
                            backgroundColor: '#BED8FB',
                            height:'100px'
                        }}>

                            <CardContent>
                                <AddLocation />Work Location <br/>
                                <Typography variant='p'>
                                    {workLocation?.workingFrom}{workLocation?.location ? <><br /><span>({workLocation.location})</span></> : ''}
                                   {/* {workLocation.workingFrom == undefined || null || '' ? '' : workLocation.workingFrom} */}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Card sx={{
                            boxShadow: 'none',
                            backgroundColor: '#BED8FB'
                        }}>

                            <CardContent>
                                <AddLocation />(Shift Timing)
                                <Typography variant='h6'>
                                    {shiftTimings.shiftStartTime} - {shiftTimings.shiftEndTime}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>

            </Box>



        </Container>
       
    )
}
export default Profile