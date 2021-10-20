import React from "react";
import styled from "styled-components";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {SLink} from "./BaseStyledComponents";


export default function Footer() {
    return (
        <Box sx={{
            backgroundColor: '#255925',
            color: 'white',
            height: '15vh',
            '&:hover': {
                backgroundColor: '#216121'
            }
        }}>
            <Container maxWidth='md'>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Typography>Work by QiuShanBeiKun @ M Z F C</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <SLink href='mailto:beikuncanada@gmail.com'><Typography>beikuncanada@gmail.com</Typography></SLink>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>More links</Typography>
                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                    <Grid item xs={4}>

                    </Grid>

                </Grid>

                <Typography>本作品采用<SLink rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                    知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议
                </SLink>进行许可。</Typography>

            </Container>
        </Box>
    );
}
