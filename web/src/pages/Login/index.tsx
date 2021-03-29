import React from 'react';
import {Link} from 'react-router-dom';
import {AppBar, IconButton, Toolbar, Typography, Button, Container, Card, CardContent} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './style.css';

function Login() {
    return (
        <>
            <AppBar position="static" color='inherit' className="barra-menu">
                <Toolbar variant="dense">
                    <Link to="/">
                        <IconButton edge="start">
                            <ArrowBackIcon/>
                        </IconButton>
                    </Link>
                    <div className="appbar-content">
                        <Typography variant="h6">Login</Typography>
                    </div>
                </Toolbar>
            </AppBar>

            <div id="login-content">
                <Card>
                    <CardContent>
                        oi
                    </CardContent>
                </Card>
            </div>
        </>
    );
}


export default Login;