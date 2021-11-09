import React, {Fragment} from "react";
import styled from "styled-components";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AppsIcon from '@mui/icons-material/Menu';

import {Link} from 'react-router-dom';


const StyledDivHeader = styled.div`
    height: 8vh;
`;

const guestLayout = (
    <Fragment>
        <Button color="inherit" href={'/login/'}>Login</Button>
        <Button color="inherit" href={'/registration/'}>Register</Button>
    </Fragment>
);

const userLayout = (
    <Fragment>
        <Button color="inherit">Username</Button>
        <Button color='inherit'>Logout</Button>
    </Fragment>
);

export default function Navbar() {

    const isAuthenticated = false;


    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Link exact to='/'>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}>
                            <AppsIcon/>
                        </IconButton>
                    </Link>
                    <Typography variant='h6' sx={{flexGrow: 1}}>Welcome!</Typography>
                    {isAuthenticated ? userLayout : guestLayout}
                </Toolbar>
            </AppBar>
        </Box>
    );
}