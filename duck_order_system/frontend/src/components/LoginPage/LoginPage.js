import React, {Component, useState} from "react";
import {connect} from 'react-redux';
import Container from "@mui/material/Container";
import {Button, FormControl, Grid, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import styled from "styled-components";


const SBorder = styled.div`
    padding: 3.5em 0;
`;

const FillBorder = styled.div`
    padding: 15% 0;
`;


const STextField = styled(TextField)`
    padding: 0.5em 0.5em 0.5em 0;
    margin: 0 2em 0 0;
`;

const SImg = styled.img`
    border-radius: 18%;
    width: 100%;
`;

export const LoginPage = () => {
    return (
        <FillBorder>
            <Container maxWidth='md'>
                <Grid container spacing={1}>
                    <Grid sx={{m: 1, width: '50ch'}}>
                        <SImg src='https://drive.google.com/uc?id=1D4QUK70yq5hMAaNuhf3SYZKUj-BqII0c&export=download'
                              alt=''/>
                    </Grid>
                    <Grid sx={{m: 1, width: '50ch', padding: '0 0 0 1em'}}>
                        <FormControl>
                            <LoginForm/>
                        </FormControl>
                    </Grid>

                </Grid>
            </Container>
        </FillBorder>
    )
}

const LoginForm = () => {
    return (
        <div>
            <Typography variant='h4'>Login</Typography>
            <SBorder>
                <STextField fullWidth required id='email_field' label='Email Address' variant='filled'/>
                <STextField fullWidth required id='password_field' label='Password' variant='filled'/>
            </SBorder>
            <Button variant='contained'>Login</Button>
            <div className='row'>
                <Button>Forgot Password?(not implemented)</Button>
                <Button href={'/registration/'}>Register</Button>
            </div>
        </div>
    )
}

