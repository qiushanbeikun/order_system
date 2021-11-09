import React, {useState} from "react";
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import {Button, FormControl, Grid, Typography} from "@mui/material";
import Container from "@mui/material/Container";
import styled from "styled-components";
import TextField from "@mui/material/TextField";

import {register} from "../../Connections/authentication";


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

const RegistrationForm = ({register}) => {

    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        password: '',
        re_password: '',
    });

    const [creationStatus, setCreationStatus] = useState(false);

    const {username, phone, password, re_password} = formData;

    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
        console.log(formData, username);
    }

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            console.log(formData)
            debugger
            register(username, phone, password, re_password)
            setCreationStatus(true);
        }
    }

    if (creationStatus)
        return <Redirect to="/"/>


    return (
        <div>
            <Typography variant='h4'>Registration</Typography>
            <SBorder>
                <STextField fullWidth required name='username' label='Email Address' variant='filled' value={username}
                            onChange={onChange}/>
                <STextField fullWidth name='phone' label='Phone Number (optional)' variant='filled' value={phone}
                            onChange={onChange}/>
                <STextField fullWidth required name='password' label='Password' variant='filled' value={password}
                            onChange={onChange} minLenght="6"/>
                <STextField fullWidth required name='re_password' label='Confirmed Password' variant='filled'
                            value={re_password} onChange={onChange}/>
            </SBorder>

            <div className='row'>
                <Button variant="contained" onClick={onSubmit}>Register</Button>
            </div>
        </div>
    )
}

export const RegisterPage = () => {
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
                            <RegistrationForm/>
                        </FormControl>
                    </Grid>

                </Grid>
            </Container>
        </FillBorder>
    )
}

export default connect(null, {register})(RegisterPage)