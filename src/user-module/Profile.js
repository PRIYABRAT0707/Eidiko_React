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

const Profile = () => {
 const navigate=useNavigate()
    useEffect(()=>{
      if(!localStorage.getItem("token")){
        navigate("/login")

      }

    } ,[])

const logoutHandle=()=>{
    localStorage.removeItem("token")
    navigate("/")
}

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{
            flexGrow: 1,
            padding: '15px',
            margin: '10px 0px'
        }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={2} sx={{
                    backgroundColor: '#2196F3',
                    color: '#fff',
                    height: '90vh'
                }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <ManageAccountsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Leaves" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Biometric Report" />
                    </ListItemButton>

                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <ManageAccountsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <SpeakerNotes />
                                </ListItemIcon>
                                <ListItemText primary="Information" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <Create />
                                </ListItemIcon>
                                <ListItemText primary="Change Password" />
                            </ListItemButton>
                        </List>
                    </Collapse>

                    <ListItemButton onClick={logoutHandle} type='submit'>
                        <ListItemIcon>
                            <LogoutIcon></LogoutIcon>
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>

                </Grid>
                <Grid item xs={6} md={10}>
                    <Container>
                        <Typography variant='h5' color="secondary">
                            Applicant Profile
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
                                                    Vikas Kumar Gupta
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
                                    <Typography variant='p' color='text.secondary' sx={{fontSize:'12px'}}>
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
                                                    <strong> vikaskumar.gupta@eidiko.com</strong>
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} md={6}>
                                                <Typography variant='p'>
                                                    Role
                                                </Typography><br />
                                                <Typography variant='p'>
                                                    <strong>Employee</strong>
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
                                                    <strong>31-03-1995</strong>
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} md={6}>
                                                <Typography variant='p'>
                                                    Date Of Joining
                                                </Typography><br />
                                                <Typography variant='p'>
                                                    <strong>31-03-1995</strong>
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} md={6}>
                                                <Typography variant='p'>
                                                    Date Of Joining
                                                </Typography><br />
                                                <Typography variant='p'>
                                                    <strong>31-03-1995</strong>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Divider color="secondary" />
                        <Box sx={{flexGrow:1}}>
                            <Grid container spacing={2} sx={{
                                margin:'15px 0px'
                            }}>
                                <Grid item xs={6} md={3}>
                                    <Card sx={{
                                        boxShadow:'none',
                                        backgroundColor:'#BED8FB'
                                    }}>
                                      
                                        <CardContent>
                                            <Call />
                                            <Typography variant='h6'>
                                                9063669981
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                <Card sx={{
                                        boxShadow:'none',
                                        backgroundColor:'#BED8FB'
                                    }}>
                                      
                                        <CardContent>
                                            <ManageAccountsIcon />(Reporting Manager)
                                            <Typography variant='h6'>                                                
                                                Vikas
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                <Card sx={{
                                        boxShadow:'none',
                                        backgroundColor:'#BED8FB'
                                    }}>
                                      
                                        <CardContent>
                                            <AddLocation />(Client Location)
                                            <Typography variant='h6'>                                                
                                                DUBAI
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                <Card sx={{
                                        boxShadow:'none',
                                        backgroundColor:'#BED8FB'
                                    }}>
                                      
                                        <CardContent>
                                            <AddLocation />(Shift Timing)
                                            <Typography variant='h6'>                                                
                                                10:00 - 19:00
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>

                            </Grid>

                        </Box>



                    </Container>
                </Grid>
                
            </Grid>
        </Box>
    )
}

export default Profile