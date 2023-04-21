import React, { useEffect, useState } from 'react'
import { Box, Card, CardContent, CardMedia, Collapse, Container, Divider, Grid, List, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'

import DraftsIcon from '@mui/icons-material/Drafts';

import { AddLocation, Call, Create, ExpandLess, ExpandMore, SpeakerNotes, StarBorder } from '@mui/icons-material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const SideNavBar = () => {
    const navigate = useNavigate()

    const [profileOpen, setprofileOpen] = React.useState(false);
    const [employeesOpen, setemployeesOpen] = React.useState(false);
    

    const handleProfileClick = () => {
        setprofileOpen(!profileOpen);
    };
    const handleEmployeeClick = () => {
        setemployeesOpen(!employeesOpen);
    };
    const logoutHandle = () => {
        sessionStorage.clear()
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Logout successfully completed ! Redirecting to Login page...',
            showConfirmButton: false,
            timer: 1500
          })
     
        navigate("/login")
    }

    const handleNavigation=(page)=>{
        navigate(page)
    }

    return (

        <Container>



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

            <ListItemButton onClick={handleProfileClick}>
                <ListItemIcon>
                    <ManageAccountsIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
                {profileOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={profileOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={()=>handleNavigation('/user/profile')}>
                        <ListItemIcon>
                            <SpeakerNotes />
                        </ListItemIcon>
                        <ListItemText primary="Information" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={()=>handleNavigation('/user/change-password')}>
                        <ListItemIcon>
                            <Create />
                        </ListItemIcon>
                        <ListItemText primary="Change Password" />
                    </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton onClick={handleEmployeeClick}>
                <ListItemIcon>
                    <ManageAccountsIcon />
                </ListItemIcon>
                <ListItemText primary="Employees" />
                {employeesOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={employeesOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <SpeakerNotes />
                        </ListItemIcon>
                        <ListItemText primary="Employees" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={()=>handleNavigation('/user/create-employee')}>
                        <ListItemIcon>
                            <Create />
                        </ListItemIcon>
                        <ListItemText primary="Create Employee" />
                    </ListItemButton>
                </List>
            </Collapse>

            <ListItemButton type='submit'>
                <ListItemIcon>
                    <LogoutIcon></LogoutIcon>
                </ListItemIcon>
                <ListItemText onClick={logoutHandle} primary="Logout" />
            </ListItemButton>

        </Container>
    )
}

export default SideNavBar