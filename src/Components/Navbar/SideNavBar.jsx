import React, { useEffect, useState } from 'react'
import { Box, Card, CardContent, CardMedia, Collapse, Container, Divider, Grid, List, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'

import DraftsIcon from '@mui/icons-material/Drafts';

import { AddLocation, Call, Create, ExpandLess, ExpandMore, SpeakerNotes, StarBorder } from '@mui/icons-material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router';

const SideNavBar = () => {
    const navigate=useNavigate()

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
     const logoutHandle=()=>{
sessionStorage.clear()
navigate("/")
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

            <ListItemButton  type='submit'>
                <ListItemIcon>
                    <LogoutIcon></LogoutIcon>
                </ListItemIcon>
                <ListItemText onClick={logoutHandle} primary="Logout" />
            </ListItemButton>

           </Container>
    )
}

export default SideNavBar