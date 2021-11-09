import React, {Component} from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {SOnePadding} from "./Commons/BaseStyledComponents";
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";

const WelcomePageButton = styled(Button)`
    padding: 1em;
    Color: #d1d1d1;
`;



export default class WelcomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SOnePadding>
                <div>
                    <Typography>You have not login,
                        <Link exact to="/login"> Login </Link>
                         or
                        <Link exact to="/registration"> Register </Link>.
                    </Typography>
                </div>
                <Container maxWidth='lg' sx={{textAlign: 'center'}}>
                    <WelcomePageButton>Pick up</WelcomePageButton>
                    <WelcomePageButton>Delivery</WelcomePageButton>
                </Container>
            </SOnePadding>
        );
    }
}